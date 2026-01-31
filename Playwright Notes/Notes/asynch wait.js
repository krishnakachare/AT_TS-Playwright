/* 

🔹 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗮𝘀𝘆𝗻𝗰 ?
    • async is a keyword used to create an async function
    • An async function always returns a Promise
    • Even a normal return value is wrapped inside a Promise
        async function getData() {
            return "JavaScript";
        }

🔹 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗮𝘄𝗮𝗶𝘁 ?
    • await can only be used inside an async function
    • It pauses the execution of that function only
    • JavaScript continues running other code
        const result = await fetch("/api");

🔹 𝗛𝗼𝘄 𝗔𝘀𝘆𝗻𝗰 / 𝗔𝘄𝗮𝗶𝘁 𝗪𝗼𝗿𝗸𝘀
    • Code runs normally until it hits await
    • Function execution is suspended
    • Once the Promise resolves, execution continues from the same line

🔹 𝗪𝗵𝘆 𝗪𝗲 𝗨𝘀𝗲 𝗔𝘀𝘆𝗻𝗰 / 𝗔𝘄𝗮𝗶𝘁
    • Makes async code look synchronous
    • Improves readability
    • Easier error handling with try / catch

🔹 𝗞𝗲𝘆 𝗣𝗼𝗶𝗻𝘁
    Async & await do not block JavaScript
    They only pause the async function — not the event loop.


*/