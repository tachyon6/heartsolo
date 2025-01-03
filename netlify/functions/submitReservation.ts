import { Handler } from "@netlify/functions";
import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const RANGE = "Sheet1!A:L"; // A열부터 L열까지 사용

const handler: Handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" }),
        };
    }

    try {
        const data = JSON.parse(event.body || "{}");

        // Google Sheets API 인증
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // 데이터 포맷팅
        const values = [
            [
                new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }), // 예약 시간
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
            ],
        ];

        // Google Sheets에 데이터 추가
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values,
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "예약이 완료되었습니다." }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "예약 중 오류가 발생했습니다." }),
        };
    }
};

export { handler };
