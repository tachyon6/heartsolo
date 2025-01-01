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
}

export function ReservationModal({ isOpen, onClose, onSubmit }: ReservationModalProps) {
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
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/submitReservation", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "예약 중 오류가 발생했습니다.");
            }

            alert("예약이 완료되었습니다!");
            onSubmit(formData);
            onClose();
        } catch (error) {
            console.error("Error:", error);
            alert("예약 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative'>
                <button onClick={onClose} className='absolute right-4 top-4 text-gray-500 hover:text-gray-700'>
                    <X className='w-6 h-6' />
                </button>

                <h2 className='text-2xl font-bold mb-6'>예약하기</h2>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* 기본 정보 */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>이름</label>
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border rounded-md'
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
                                className='w-full px-3 py-2 border rounded-md'
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>성별</label>
                            <select
                                name='gender'
                                value={formData.gender}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border rounded-md'
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
                                className='w-full px-3 py-2 border rounded-md'
                                placeholder='010-0000-0000'
                                required
                            />
                        </div>

                        {/* 장비 및 실력 */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>장비 선택</label>
                            <select
                                name='equipment'
                                value={formData.equipment}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border rounded-md'
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
                                className='w-full px-3 py-2 border rounded-md'
                                required
                            >
                                <option value='초급'>초급</option>
                                <option value='중급'>중급</option>
                                <option value='상급'>상급</option>
                            </select>
                        </div>

                        {/* 패키지 선택 */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>패키지 선택</label>
                            <select
                                name='package'
                                value={formData.package}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border rounded-md'
                                required
                            >
                                <option value='기본'>올인클루시브 (240,000원)</option>
                                <option value='중급'>장비 개별 준비 (160,000원)</option>
                                <option value='프리미엄'>파티 미참여 (100,000원)</option>
                            </select>
                            <p className='text-xs text-gray-500 mt-1'>* 가격은 1인 기준입니다</p>
                        </div>

                        {/* 신체 정보 */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>키 (cm)</label>
                            <input
                                type='number'
                                name='height'
                                value={formData.height}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border rounded-md'
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
                                className='w-full px-3 py-2 border rounded-md'
                                required
                            />
                        </div>

                        {/* 셔틀 및 날짜 */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>셔틀버스</label>
                            <select
                                name='shuttle'
                                value={formData.shuttle}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border rounded-md'
                                required
                            >
                                <option value='없음'>이용 안함</option>
                                <option value='기본(1만원)'>기본 셔틀 (1만원)</option>
                                <option value='강변(3만원)'>강변 왕복 (3만원)</option>
                            </select>
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>희망 날짜 (출발일)</label>
                            <input
                                type='date'
                                name='date'
                                value={formData.date}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border rounded-md'
                                required
                            />
                            <p className='text-xs text-gray-500 mt-1'>* 선택하신 날짜에 출발하여 다음날 귀가합니다</p>
                        </div>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button type='submit' className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700'>
                            예약하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}