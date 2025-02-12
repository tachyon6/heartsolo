import React, { useState } from "react";
import { X } from "lucide-react";

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: ReservationData) => void;
}

export interface ReservationData {
    name: string;
    age: string;
    gender: "남성" | "여성";
    phone: string;
    equipment: "스키" | "보드";
    level: "초급" | "중급" | "상급";
    package: "기본" | "중급" | "프리미엄";
    height: string;
    footSize: string;
    shuttle: "기본(1만원)" | "강변(3만원)" | "없음";
    date: string;
    rental_equipment: boolean;
    rental_clothes: boolean;
    lift_ticket: boolean;
}

export function ReservationModal({ isOpen, onClose, onSubmit }: ReservationModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<ReservationData>({
        name: "",
        age: "",
        gender: "남성",
        phone: "",
        equipment: "스키",
        level: "초급",
        package: "기본",
        height: "",
        footSize: "",
        shuttle: "없음",
        date: "",
        rental_equipment: false,
        rental_clothes: false,
        lift_ticket: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 토요일 체크
        const selectedDate = new Date(formData.date);
        const dayOfWeek = selectedDate.getDay();

        if (dayOfWeek !== 6) {
            alert("죄송합니다. 현재 토요일만 예약이 가능합니다.");
            return;
        }

        setIsSubmitting(true);
        try {
            // HTML 형식의 이메일 내용 생성
            const htmlContent = `
                <h2>새로운 예약이 접수되었습니다</h2>
                <h3>신청자 정보</h3>
                <ul>
                    <li><strong>이름:</strong> ${formData.name}</li>
                    <li><strong>나이:</strong> ${formData.age}</li>
                    <li><strong>성별:</strong> ${formData.gender}</li>
                    <li><strong>연락처:</strong> ${formData.phone}</li>
                </ul>
                <h3>예약 정보</h3>
                <ul>
                    <li><strong>장비:</strong> ${formData.equipment}</li>
                    <li><strong>실력:</strong> ${formData.level}</li>
                    <li><strong>패키지:</strong> ${formData.package}</li>
                    <li><strong>키:</strong> ${formData.height}cm</li>
                    <li><strong>발사이즈:</strong> ${formData.footSize}mm</li>
                    <li><strong>셔틀:</strong> ${formData.shuttle}</li>
                    <li><strong>희망날짜:</strong> ${formData.date}</li>
                </ul>
                <h3>추가 옵션</h3>
                <ul>
                    <li><strong>장비 렌탈:</strong> ${formData.rental_equipment ? "신청" : "미신청"} (15,000원)</li>
                    <li><strong>의류 렌탈:</strong> ${formData.rental_clothes ? "신청" : "미신청"} (10,000원)</li>
                    <li><strong>리프트권:</strong> ${formData.lift_ticket ? "신청" : "미신청"} (45,000원)</li>
                </ul>
                <p>예약 시간: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</p>
            `;

            // 텍스트 형식의 이메일 내용 생성
            const textContent = `
새로운 예약이 접수되었습니다

신청자 정보
- 이름: ${formData.name}
- 나이: ${formData.age}
- 성별: ${formData.gender}
- 연락처: ${formData.phone}

예약 정보
- 장비: ${formData.equipment}
- 실력: ${formData.level}
- 패키지: ${formData.package}
- 키: ${formData.height}cm
- 발사이즈: ${formData.footSize}mm
- 셔틀: ${formData.shuttle}
- 희망날짜: ${formData.date}

예가 옵션
- 장비 렌탈: ${formData.rental_equipment ? "신청" : "미신청"} (15,000원)
- 의류 렌탈: ${formData.rental_clothes ? "신청" : "미신청"} (10,000원)
- 리프트권: ${formData.lift_ticket ? "신청" : "미신청"} (45,000원)

예약 시간: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
            `;

            const response = await fetch("https://api.reportable.xyz/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: "kmwbb1208@naver.com",
                    subject: `[하트솔로] 새로운 예약 - ${formData.name}`,
                    text: textContent,
                    html: htmlContent,
                }),
            });

            if (!response.ok) {
                throw new Error("예약 중 오류가 발생했습니다.");
            }

            alert("예약이 완료되었습니다!");
            onSubmit(formData);
            onClose();
        } catch (error) {
            console.error("Error:", error);
            alert("예약 중 오류가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
            <div className='bg-white rounded-lg p-4 sm:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative'>
                <button
                    onClick={onClose}
                    className='absolute right-2 sm:right-4 top-2 sm:top-4 text-gray-500 hover:text-gray-700'
                >
                    <X className='w-6 h-6' />
                </button>

                <h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6'>예약하기</h2>

                <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                    <div className='grid grid-cols-1 gap-4 sm:gap-6'>
                        {/* 기본 정보 */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>이름</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md text-base'
                                    required
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>나이</label>
                                <input
                                    type='number'
                                    name='age'
                                    value={formData.age}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md text-base'
                                    required
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>성별</label>
                                <select
                                    name='gender'
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md text-base'
                                    required
                                >
                                    <option value='남성'>남성</option>
                                    <option value='여성'>여성</option>
                                </select>
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>연락처</label>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md text-base'
                                    placeholder='010-0000-0000'
                                    required
                                />
                            </div>
                        </div>

                        {/* 장비 및 실력 */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>장비 선택</label>
                                <select
                                    name='equipment'
                                    value={formData.equipment}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md text-base'
                                    required
                                >
                                    <option value='스키'>스키</option>
                                    <option value='보드'>보드</option>
                                </select>
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>실력</label>
                                <select
                                    name='level'
                                    value={formData.level}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md text-base'
                                    required
                                >
                                    <option value='초급'>초급</option>
                                    <option value='중급'>중급</option>
                                    <option value='상급'>상급</option>
                                </select>
                            </div>
                        </div>

                        {/* 패키지 선택 */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>패키지 선택</label>
                            <select
                                name='package'
                                value={formData.package}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border rounded-md text-base'
                                required
                            >
                                <option value='기본'>올인클루시브 (160,000원)</option>
                                <option value='프리미엄'>파티 미참여 (100,000원)</option>
                            </select>
                            <p className='text-xs text-gray-500 mt-1'>* 가격은 1인 기준입니다</p>
                        </div>

                        {/* 추가 옵션 */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>추가 옵션</label>
                            <div className='space-y-2'>
                                <div className='flex items-center justify-between bg-gray-50 p-3 rounded-lg'>
                                    <label className='flex items-center gap-2 flex-1'>
                                        <input
                                            type='checkbox'
                                            name='rental_equipment'
                                            checked={formData.rental_equipment}
                                            onChange={handleChange}
                                            className='rounded text-blue-600'
                                        />
                                        <span className='text-sm'>장비 렌탈 (스키/보드)</span>
                                    </label>
                                    <span className='text-blue-600 font-medium text-sm whitespace-nowrap'>
                                        15,000원
                                    </span>
                                </div>
                                <div className='flex items-center justify-between bg-gray-50 p-3 rounded-lg'>
                                    <label className='flex items-center gap-2 flex-1'>
                                        <input
                                            type='checkbox'
                                            name='rental_clothes'
                                            checked={formData.rental_clothes}
                                            onChange={handleChange}
                                            className='rounded text-blue-600'
                                        />
                                        <span className='text-sm'>의류 렌탈</span>
                                    </label>
                                    <span className='text-blue-600 font-medium text-sm whitespace-nowrap'>
                                        10,000원
                                    </span>
                                </div>
                                <div className='flex items-center justify-between bg-gray-50 p-3 rounded-lg'>
                                    <label className='flex items-center gap-2 flex-1'>
                                        <input
                                            type='checkbox'
                                            name='lift_ticket'
                                            checked={formData.lift_ticket}
                                            onChange={handleChange}
                                            className='rounded text-blue-600'
                                        />
                                        <span className='text-sm'>리프트권 (4시간)</span>
                                    </label>
                                    <span className='text-blue-600 font-medium text-sm whitespace-nowrap'>
                                        45,000원
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 신체 정보 */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>키 (cm)</label>
                                <input
                                    type='number'
                                    name='height'
                                    value={formData.height}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md text-base'
                                    required
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>발 사이즈 (mm)</label>
                                <input
                                    type='number'
                                    name='footSize'
                                    value={formData.footSize}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md text-base'
                                    required
                                />
                            </div>
                        </div>

                        {/* 셔틀 및 날짜 */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>셔틀버스</label>
                                <select
                                    name='shuttle'
                                    value={formData.shuttle}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md text-base'
                                    required
                                >
                                    <option value='없음'>이용 안함</option>
                                    <option value='기본(1만원)'>기본 셔틀 (1만원)</option>
                                    <option value='강변(3만원)'>강변 왕복 (3만원)</option>
                                </select>
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>
                                    희망 날짜 (토요일만 가능)
                                </label>
                                <input
                                    type='date'
                                    name='date'
                                    value={formData.date}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-md text-base'
                                    required
                                />
                                <p className='text-xs text-red-500 mt-1'>* 토요일만 예약 가능합니다.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button
                            type='submit'
                            className='w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className='animate-spin h-5 w-5 text-white'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                    >
                                        <circle
                                            className='opacity-25'
                                            cx='12'
                                            cy='12'
                                            r='10'
                                            stroke='currentColor'
                                            strokeWidth='4'
                                        ></circle>
                                        <path
                                            className='opacity-75'
                                            fill='currentColor'
                                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                        ></path>
                                    </svg>
                                    예약 처리중...
                                </>
                            ) : (
                                "예약하기"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
