import type { VercelRequest, VercelResponse } from "@vercel/node";
import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const RANGE = "Sheet1!A:L"; // A열부터 L열까지 사용

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method !== "POST") {
        return response.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        // 환경 변수 체크
        if (!process.env.GOOGLE_SHEET_ID) {
            throw new Error('GOOGLE_SHEET_ID is not set');
        }
        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
            throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL is not set');
        }
        if (!process.env.GOOGLE_PRIVATE_KEY) {
            throw new Error('GOOGLE_PRIVATE_KEY is not set');
        }

        const data = request.body;
        console.log('Received data:', data);

        // Google Sheets API 인증
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        console.log('Auth configured');

        const sheets = google.sheets({ version: 'v4', auth });
        console.log('Sheets client created');

        // 데이터 포맷팅
        const values = [[
            new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }), // 예약 시간
            data.name,
            data.age,
            data.gender,
            data.phone,
            data.equipment,
            data.level,
            data.package,
            data.height,
            data.footSize,
            data.shuttle,
            data.date,
        ]];

        console.log('Formatted values:', values);

        // Google Sheets에 데이터 추가
        const appendResult = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values,
            },
        });

        console.log('Append result:', appendResult.data);

        return response.status(200).json({ 
            message: '예약이 완료되었습니다.',
            success: true 
        });
    } catch (error: any) {
        console.error('Detailed error:', {
            message: error.message,
            stack: error.stack,
            name: error.name,
        });

        return response.status(500).json({ 
            message: '예약 중 오류가 발생했습니다.',
            error: error.message,
            success: false
        });
    }
}
