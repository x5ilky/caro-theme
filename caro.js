/*
 * CARO - Orac Theme
 */
(async () => {
    window.caro = {};
    window.caro.setBackgroundImages = (imgs) => {
        bgImg = (imgs?.[Math.floor(Math.random() * imgs.length)]) ?? defaultBgImg;
        console.log(`%c[CARO] %c chose background image: %c${bgImg}`, "color: var(--col-text); font-size: 2rem;", "color: white; font-size: 1rem;", "");
        window.addEventListener("load", () => {
            const styleElem = document.createElement("style");
            styleElem.innerHTML = `
                :root {
                    --bg-img: url(${bgImg});
                }
            `;
            document.body.appendChild(styleElem);
        });
    }
    window.caro.addStyle = (sty) => {
        window.addEventListener("load", () => {
            const styleElem = document.createElement("style");
            styleElem.innerHTML = sty;
            document.body.appendChild(styleElem);
        });
    };
    const defaultBgImg = "https://raw.githubusercontent.com/x5ilky/x5ilky/refs/heads/main/img/pngegg.png";
    let bgImg = defaultBgImg;
    function waitForElement(selector, root = document) {
        return new Promise(resolve => {
            const existing = root.querySelector(selector);

            if (existing) {
                resolve(existing);
                return;
            }

            const observer = new MutationObserver(() => {
                const element = root.querySelector(selector);

                if (element) {
                    observer.disconnect();
                    resolve(element);
                }
            });

            observer.observe(root, {
                childList: true,
                subtree: true,
            });
        });
    }
    const style=(bgImg) => `
        @import url('https://cdn.jsdelivr.net/npm/@catppuccin/palette/css/catppuccin.css');
        @import url('https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi&display=swap');
        .kaisei-harunoumi-regular {
            font-family: "Kaisei HarunoUmi", serif;
            font-weight: 400;
            font-style: normal;
        }
        :root {
            --bg-img: url(${bgImg});
            --col-mantle: oklch(var(--ctp-mocha-mantle-oklch));
            --col-crust: oklch(var(--ctp-mocha-crust-oklch));
            --col-base: oklch(var(--ctp-mocha-base-oklch));
            --col-surface0: oklch(var(--ctp-mocha-surface0-oklch));
            --col-surface1: oklch(var(--ctp-mocha-surface1-oklch));
            --col-overlay0: oklch(var(--ctp-mocha-overlay0-oklch));
            --col-overlay2: oklch(var(--ctp-mocha-overlay2-oklch));
            --col-text: oklch(var(--ctp-mocha-text-oklch));
            --col-subtext: oklch(var(--ctp-mocha-subtext0-oklch));

            --col-red: oklch(var(--ctp-mocha-red-oklch));
            --col-rosewater: oklch(var(--ctp-mocha-rosewater-oklch));
            --col-flamingo: oklch(var(--ctp-mocha-flamingo-oklch));
            --col-pink: oklch(var(--ctp-mocha-pink-oklch));
            --col-mauve: oklch(var(--ctp-mocha-mauve-oklch));
            --col-maroon: oklch(var(--ctp-mocha-maroon-oklch));
            --col-peach: oklch(var(--ctp-mocha-peach-oklch));
            --col-yellow: oklch(var(--ctp-mocha-yellow-oklch));
            --col-green: oklch(var(--ctp-mocha-green-oklch));
            --col-teal: oklch(var(--ctp-mocha-teal-oklch));
            --col-sky: oklch(var(--ctp-mocha-sky-oklch));
            --col-sapphire: oklch(var(--ctp-mocha-sapphire-oklch));
            --col-blue: oklch(var(--ctp-mocha-blue-oklch));
            --col-lavender: oklch(var(--ctp-mocha-lavender-oklch));
            --font-japanese: "Kaisei HarunoUmi", serif;
            --font-english: var(--font-japanese);
        }
        body {
            display: flex;
            flex-direction: row;
            font-family: var(--font-english);
        }
        .navbar {
            display: flex;
        }
        .caro-navbar {
            display: flex;
            flex-direction: column;
            width: 200px;
            align-items: center;
            justify-content: center;
            gap: 50px;
            height: 100vh;
            background-color: var(--col-crust) !important;
            font-family: var(--font-japanese);
        }
        footer {
            display: none;
        }
        .badge-tag {
            background-color: var(--col-overlay0) !important;
        }
        .badge-tag.selected-tag {
            background-color: var(--col-overlay2) !important;
        }
        .container-xl {
            max-width: none !important;
            height: 100vh;
            overflow-y: scroll;
            overflow-x: none;
            background-color: var(--col-mantle) !important;
            color: var(--col-text);
            display: flex;
            flex-direction: column;
            padding-top: 80px;
            scrollbar-color: var(--col-overlay0) var(--col-surface0);
        }
        .container {
            margin: 0px;
            margin-top: 10px;
            margin-bottom: 10px;
            max-width: none;
        }
        .caro-navbar-item > a {
            color: var(--col-text);
            text-decoration: none;
            writing-mode: vertical-lr;
            transition: all 200ms;
            font-size: 2rem;
        }

        .caro-navbar-item > a:hover {
            font-size: 2.5rem;
            letter-spacing: 0.2rem;
        }
        .caro-navbar-item.caro-navbar-title > a:hover {
            font-size: 6rem;
            letter-spacing: 0.2rem;
        }

        .caro-navbar-title > a {
            font-size: 5rem;
        }
        
        .caro-hover-red:hover { color: var(--col-red) !important; }
        .caro-hover-rosewater:hover { color: var(--col-rosewater) !important; }
        .caro-hover-flamingo:hover { color: var(--col-flamingo) !important; }
        .caro-hover-pink:hover { color: var(--col-pink) !important; }
        .caro-hover-mauve:hover { color: var(--col-mauve) !important; }
        .caro-hover-maroon:hover { color: var(--col-maroon) !important; }
        .caro-hover-peach:hover { color: var(--col-peach) !important; }
        .caro-hover-yellow:hover { color: var(--col-yellow) !important; }
        .caro-hover-green:hover { color: var(--col-green) !important; }
        .caro-hover-teal:hover { color: var(--col-teal) !important; }
        .caro-hover-sky:hover { color: var(--col-sky) !important; }
        .caro-hover-sapphire:hover { color: var(--col-sapphire) !important; }
        .caro-hover-blue:hover { color: var(--col-blue) !important; }
        .caro-hover-lavender:hover { color: var(--col-lavender) !important; }

        #show-sets {
            display: block;
            column-count: 2;
            column-gap: 2rem;
        }
        .table thead {
            background-color: var(--col-surface0) !important; 
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 20px;
            padding-bottom: 20px;
        }
        .table th {
            background-color: transparent !important;
            border: none !important;
        }
        .table th > span {
            writing-mode: sideways-lr;
            text-align: center;
        }
        .table th  .badge {
            writing-mode: sideways-lr;
        }
        .table {
            height: 100%;
        }
        .table tbody {
            height: 100%;
            display: flex; 
            flex-direction: column;
        }
        .table tbody a {
            color: var(--col-text);
        }
        .table tbody tr {
            display: flex;
            flex-direction: row;
            flex: 1;
            width: 100%;
            color: var(--col-lavender);
        }
        .table tbody tr td {
            display: flex;
            align-items: center;
            justify-content: end;
            border: none;
            gap: 10px;
            flex: 1;
            font-size: 1.3rem;
            transition: all 200ms;
            transform-origin: left center;
            padding: 20px;
        }
        .table tbody tr td:nth-child(1) {
            font-size: 2rem;
            justify-content: start;
            flex: 2;
        }
        .table tbody tr td:nth-child(1):hover {
            transform: scale(120%);
        }
        .table tbody tr td:nth-child(1) > a:hover {
            text-decoration: none !important;
            color: var(--col-rosewater);
        }

        .set-table {
            display: grid;
            grid-template-columns: 40px 1fr;
            margin-bottom: 30px;
            break-inside: avoid;
        }
        .set-table > table > thead > tr {
            display: flex;
            flex-direction: column;
        }
        body > div.container-xl > div:nth-child(2) {
            display: none;
        }
        .tags-container {
            position: fixed;
            left: 50%;
            top: 20px;
            transform: translate(-50%);
            padding: 20px;
            margin: 10px;
            background-color: var(--col-surface0);
            border-radius: 20px;
            z-index: 1000;
        }
        .navbar:nth-child(2 of .navbar) {
            background-color: var(--col-crust) !important;
            overflow: hidden;
            height: 100vh;
        }
        .navbar:nth-child(2 of .navbar) > div {
            display: flex;
            overflow: hidden;
            flex-direction: column;
            width: 200px;
            align-items: center;
            justify-content: center;
            gap: 50px;
            height: 100vh;
            font-family: var(--font-japanese);
        }
        .navbar:nth-child(2 of .navbar) > div > div {
            flex: 3;
            width: 100%;
        }
        .navbar:nth-child(2 of .navbar) > div > div > ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
        }
        .navbar:nth-child(2 of .navbar) > div > div > ul > li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center !important;
            flex: 2;
        }
        .navbar:nth-child(2 of .navbar) > div > div > ul > li > a {
            color: var(--col-text) !important;
            font-size: 2rem;
            writing-mode: vertical-lr;
        }
        .navbar:nth-child(2 of .navbar) > div > div > ul > li > a.active {
            background-color: transparent;
            border: none;
            color: var(--col-flamingo) !important;
            font-size: 2rem;
            writing-mode: vertical-lr;
        }
        .leaderboard-grid {
            width: 60% !important;
        }
        .navbar:nth-child(2 of .navbar) > div > div.mx-auto > ul > li {
            flex: 1;
        }
        .login-card {
            background-color: var(--col-base);
        }
        .badge-cmsgreen {
            background-color: var(--col-green);
        }
        .badge-cmsyellow {
            background-color: var(--col-yellow);
        }
        .badge-cmsred {
            background-color: var(--col-red);
        }
        h1.landing, h2.landing {
            color: var(--col-text);
        }
        p {
            color: var(--col-subtext);
        }
        .btn-primary {
            background-color: var(--col-lavender);
            border: none;
            color: var(--col-surface0);
        }
    `;
    const styleElem = document.createElement("style");
    styleElem.innerHTML = style(bgImg);
    await waitForElement("body > link");
    document.body.appendChild(styleElem);
    
    const TLML=".container-xl > table:nth-child(1 of table)"
    const SUBMIT=".container-xl > table:nth-child(2 of table)"
    const PSTMT=".container-xl > div:nth-child(1 of div)"
    const PINFO=".container-xl:nth-child(2 of div) > div:nth-child(2 of div)"
    const PINFO2=".container-xl > h2:nth-child(1 of h2)"
    const PINFO3=".container-xl:nth-child(2 of div) > div:nth-child(3 of div)"
    const problemStatementStyle=`
        .container-xl {
            padding-top: 20px;
            display: grid;
            width: 100%;
            height: 100vh;
            grid-template-columns: 3fr 2fr;
            grid-template-areas:
                "submit tlml"
                "stmt other"
                "stmt other"
                "stmt other"
                "stmt other";
            overflow: hidden;
        }
        ${TLML} {
            grid-area: tlml;
            display: flex;
            flex-direction: column;
        }
        ${TLML} thead {
            flex-direction: row;
        }
        .table thead {
            padding: 4px;
        }
        .table tbody tr td {
            font-size: 1rem !important;
            padding: 4px;
        }
        h2, p {
            display: none;
        }
        ${SUBMIT} {
            grid-area: submit;
        }
        ${PSTMT} {
            grid-area: stmt;
        }
        ${PINFO3}{ 
            grid-area: other;
            height: 10%;
            display: none;
        }
        ${PINFO} { 
            grid-area: other;
            border: none;
            background-color: transparent;
            background-image: var(--bg-img);
            background-repeat: no-repeat;
            background-position: right center;
            background-size: contain;
        }
        ${PINFO} > ul { 
            margin-top: auto !important;
            height: 10%;
            padding: 10px;
        }
        ${PINFO} > ul > li{ 
            background-color: var(--col-surface0);
            border: none;
        }
        ${PINFO2} { 
            display: none;
        }
        ${PINFO} .card {
            background-color: var(--col-base);
            border-radius: 30px;
        }
        ${PINFO} .card a {
            color: var(--col-text);
        }
    `;
    if (location.pathname.startsWith("/problem")) {
        const styleElem2 = document.createElement("style");
        styleElem2.innerHTML = problemStatementStyle;
        document.body.appendChild(styleElem2);
    }

    const profileStyle = `
        .container-xl {
            background-color: transparent;
            background-image: var(--bg-img);
            background-repeat: no-repeat;
            background-position: right center;
            background-size: contain;
        }
        p { display: none; }
    `
    if (location.pathname.startsWith("/hub/profile")) {
        const styleElem2 = document.createElement("style");
        styleElem2.innerHTML = profileStyle;
        document.body.appendChild(styleElem2);
    }
    const leaderboardStyle = `
        .container-xl > .container-xl {
            background-color: transparent;
            background-image: var(--bg-img);
            background-repeat: no-repeat;
            background-position: right center;
            background-size: contain;
        }
        .leaderboard-grid li {
            box-shadow: 0 0 0 1px var(--col-overlay0) inset;
        }
        .leaderboard-grid li .place  {
            border-right: 1px solid var(--col-overlay0);
        }
        .leaderboard-grid li .solvecount  {
            border-left: 1px solid var(--col-overlay0);
        }
        p { display: none; }
        .username-field {
            display: flex;
            align-items: center;
            justify-content: start;
            font-size: 1.3rem;
        }
        .solvecount {
            display: flex;
            align-items: center;
            justify-content: end;
            font-size: 1.5rem;
        }
        .place {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            writing-mode: vertical-lr;
        }
        .nav-tabs {
            border: none;
        }
        .nav-link {
            background-color: var(--col-surface0) !important;
            border: none;
            color: var(--col-text) !important;
        }
        .nav-link.active {
            background-color: var(--col-overlay0) !important;
            border: none;
            color: var(--col-text) !important;
        }
    `
    if (location.pathname.startsWith("/hub/leaderboards")) {
        const styleElem2 = document.createElement("style");
        styleElem2.innerHTML = leaderboardStyle;
        document.body.appendChild(styleElem2);
        const observer = new MutationObserver(() => {
            const elems = document.querySelectorAll(".place");
            const traditionalChineseNumbers = {
                1: "壹",
                2: "貳",
                3: "參",
                4: "肆",
                5: "伍",
                6: "陸",
                7: "柒",
                8: "捌",
                9: "玖",
                10: "拾",
                11: "拾壹",
                12: "拾貳",
                13: "拾參",
                14: "拾肆",
                15: "拾伍",
                16: "拾陸",
                17: "拾柒",
                18: "拾捌",
                19: "拾玖",
                20: "廿",
                21: "廿壹",
                22: "廿貳",
                23: "廿參",
                24: "廿肆",
                25: "廿伍",
                26: "廿陸",
                27: "廿柒",
                28: "廿捌",
                29: "廿玖",
                30: "參拾"
            };
            for(const e of elems) {
                if (e.textContent.trim() in traditionalChineseNumbers){
                    e.textContent = traditionalChineseNumbers[e.textContent.trim()];
                }
            }
        });
        observer.observe(document.body, {
            subtree: true,
            childList: true,
        });
    }

    const navbar = await waitForElement(".navbar");
    navbar.classList.add("caro-navbar");
    navbar.innerHTML=`
    <span class="caro-navbar-item caro-navbar-title"><a class="caro-hover-mauve" href="/">カロ</a></span>
    <span class="caro-navbar-item"><a class="caro-hover-maroon" href="/hub/personal">問題</a></span>
    <span class="caro-navbar-item"><a class="caro-hover-yellow" href="/hub/leaderboards">順位表</a></span>
    <span class="caro-navbar-item"><a class="caro-hover-sapphire" href="/hub/profile">ぷろふぃーる</a></span>
    <span class="caro-navbar-item"><a class="caro-hover-teal" href="/hub/allsubs/1">提出</a></span>
    <span class="caro-navbar-item"><a class="caro-hover-red" href="/accounts/logout">ログアウト</a></span>
    `;

    const submissionsStyle = `
        .table {
            grid-area: stmt !important;
        }
        .table thead {
            height: auto;
        }
        .table tbody th {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }
        .table tbody tr td {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem !important;
        }
        body > div.container-xl > table.mb-2 > tbody {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 30px;
        }

        body > div.container-xl > div:nth-child(2) {
            display: block;
        }

        #solution-form {
            grid-area: submit;
        }

        body > .container-xl {
            background-color: transparent;
            background-image: var(--bg-img);
            background-repeat: no-repeat;
            background-position: right center;
            background-size: contain;
        }
    `
    if (location.pathname.includes("submissions")) {
        const styleElem2 = document.createElement("style");
        styleElem2.innerHTML = submissionsStyle;
        document.body.appendChild(styleElem2);
    }

    const t = async (f) => {
        try { await f(); } catch {};
    };

    window.addEventListener("load", () => {
        // t(() => document.querySelector("body > div.container-xl > h1").remove());
        // t(() => document.querySelector("body > div.container-xl > p").remove());
        // t(() => document.querySelector("body > div.container-xl > p").remove());
        for (const elem of document.querySelectorAll("hr")) elem.remove();
        for (const elem of document.querySelectorAll(".fa-tag")) {
            if(elem.parentElement.children[0].className === "mr-auto")
                elem.parentElement.parentElement.remove();
            else elem.remove();
        }
        const translate = {
            "Statement": "問題",
            "Submissions": "提出",
            "Hall of Fame": "栄光の殿堂",
            "Report Issue": "バグを報告"
        };
        for(const elem of document.querySelectorAll(".navbar:nth-child(2 of .navbar) > div > div > ul > li > a")){
            if (elem.textContent.trim() in translate) {
                elem.textContent = translate[elem.textContent.trim()];
            }
        }

        // custom background images?
    });
})();
