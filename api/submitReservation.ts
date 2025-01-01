import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method !== "POST") {
        return response.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const data = request.body;
        console.log("Received data:", data);

        // HTML 형식의 이메일 내용 생성
        const htmlContent = `
            <h2>새로운 예약이 접수되었습니다</h2>
            <h3>신청자 정보</h3>
            <ul>
                <li><strong>이름:</strong> ${data.name}</li>
                <li><strong>나이:</strong> ${data.age}</li>
                <li><strong>성별:</strong> ${data.gender}</li>
                <li><strong>연락처:</strong> ${data.phone}</li>
            </ul>
            <h3>예약 정보</h3>
            <ul>
                <li><strong>장비:</strong> ${data.equipment}</li>
                <li><strong>실력:</strong> ${data.level}</li>
                <li><strong>패키지:</strong> ${data.package}</li>
                <li><strong>키:</strong> ${data.height}cm</li>
                <li><strong>발사이즈:</strong> ${data.footSize}mm</li>
                <li><strong>셔틀:</strong> ${data.shuttle}</li>
                <li><strong>희망날짜:</strong> ${data.date}</li>
            </ul>
            <p>예약 시간: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</p>
        `;

        // 텍스트 형식의 이메일 내용 생성
        const textContent = `
새로운 예약이 접수되었습니다

신청자 정보
- 이름: ${data.name}
- 나이: ${data.age}
- 성별: ${data.gender}
- 연락처: ${data.phone}

예약 정보
- 장비: ${data.equipment}
- 실력: ${data.level}
- 패키지: ${data.package}
- 키: ${data.height}cm
- 발사이즈: ${data.footSize}mm
- 셔틀: ${data.shuttle}
- 희망날짜: ${data.date}

예약 시간: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
        `;

        // 이메일 전송 요청
        const emailResponse = await fetch("http://52.78.196.117:8000/api/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: "contact@myquark.app",
                subject: `[하트솔로] 새로운 예약 - ${data.name}`,
                text: textContent,
                html: htmlContent,
            }),
        });

        if (!emailResponse.ok) {
            throw new Error("이메일 전송 실패");
        }

        return response.status(200).json({
            message: "예약이 완료되었습니다.",
            success: true,
        });
    } catch (error: any) {
        console.error("Detailed error:", {
            message: error.message,
            stack: error.stack,
            name: error.name,
        });

        return response.status(500).json({
            message: "예약 중 오류가 발생했습니다.",
            error: error.message,
            success: false,
        });
    }
}
