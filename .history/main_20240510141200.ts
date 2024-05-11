


import { Plugin, Notice } from "obsidian";


let translationElementCreated = false; 
function removeCreatedElements() {
    // تحديد وإزالة جميع العناصر التي تم إنشاؤها مسبقًا
    const elements = document.querySelectorAll("div[data-created='true']");
    elements.forEach(element => {
        element.parentNode.removeChild(element);
    });
    translationElementCreated = false;



}

export default class ExamplePlugin extends Plugin {
    onload() {
        // إضافة عنصر لشريط الحالة




        let languages = [
            { name: "العربية", code: "ar" },
            { name: "English", code: "en" },
            { name: "中文", code: "zh" },
            { name: "Français", code: "fr" },
            { name: "Español", code: "es" },
            { name: "Português", code: "pt" },
            { name: "Русский", code: "ru" },
            { name: "Deutsch", code: "de" },
            { name: "日本語", code: "ja" },
            { name: "हिन्दी", code: "hi" },
            { name: "Italiano", code: "it" },
            { name: "한국어", code: "ko" },
            { name: "Türkçe", code: "tr" },
            { name: "Nederlands", code: "nl" },
            { name: "Polski", code: "pl" },
            { name: "Bahasa Indonesia", code: "id" },
            { name: "ไทย", code: "th" },
            { name: "Tiếng Việt", code: "vi" },
            { name: "Ελληνικά", code: "el" },
            { name: "Svenska", code: "sv" },
            // القائمة تحتوي على 80 لغة أخرى ، يمكنك إضافتها هنا.
            { name: "Afrikaans", code: "af" },
            { name: "Azərbaycanca", code: "az" },
            { name: "বাংলা", code: "bn" },
            { name: "Български", code: "bg" },
            { name: "Català", code: "ca" },
            { name: "Čeština", code: "cs" },
            { name: "Dansk", code: "da" },
            { name: "Eesti", code: "et" },
            { name: "Filipino", code: "tl" },
            { name: "Suomi", code: "fi" },
            { name: "Gaeilge", code: "ga" },
            { name: "ગુજરાતી", code: "gu" },
            { name: "Hrvatski", code: "hr" },
            { name: "Magyar", code: "hu" },
            { name: "Íslenska", code: "is" },
            { name: "ಕನ್ನಡ", code: "kn" },
            { name: "Қазақ", code: "kk" },
            { name: "ខ្មែរ", code: "km" },
            { name: "한국어", code: "ko" },
            { name: "Kurdî", code: "ku" },
            { name: "ລາວ", code: "lo" },
            { name: "Latviešu", code: "lv" },
            { name: "Lietuvių", code: "lt" },
            { name: "македонски", code: "mk" },
            { name: "മലയാളം", code: "ml" },
            { name: "मराठी", code: "mr" },
            { name: "Монгол", code: "mn" },
            { name: "မြန်မာ", code: "my" },
            { name: "नेपाली", code: "ne" },
            { name: "Norsk", code: "no" },
            { name: "فارسی", code: "fa" },
            { name: "ਪੰਜਾਬੀ", code: "pa" },
            { name: "Română", code: "ro" },
            { name: "සිංහල", code: "si" },
            { name: "Slovenčina", code: "sk        // استدعاء الدالة لإزالة العناصر المنشأة مسبقًا عند النقر
" },
            { name: "Slovenščina", code: "sl" },
            { name: "Sesotho", code: "st" },
            { name: "Српски", code: "sr" },
            { name: "தமிழ்", code: "ta" },
            { name: "తెలుగు", code: "te" },
            { name: "ကညီကျိာ်", code: "tg" },
            { name: "ไทย", code: "th" },
            { name: "မြန်မာ", code: "my" },
            { name: "Тоҷикӣ", code: "tg" },
            { name: "Türkmen", code: "tk" },
            { name: "Українська", code: "uk" },
            { name: "اردو", code: "ur" },
            { name: "Oʻzbekcha", code: "uz" },
            { name: "Cymraeg", code: "cy" },
            { name: "isiXhosa", code: "xh" },
            { name: "ייִדיש", code: "yi" },
            { name: "Yorùbá", code: "yo" },
            { name: "Zulu", code: "zu" }
        ];

        // إنشاء عنصر select
        let langlist = this.addStatusBarItem().createEl("select");

        // إضافة خيارات اللغات إلى العنصر select
        languages.forEach(lang => {
            let option = document.createElement("option");
            option.text = lang.name;
            option.value = lang.code;
            langlist.appendChild(option);
        });

	//My ==============================================



        this.statusBarElement = this.addStatusBarItem().createEl("button");
		this.statusBarElement.classList.add("btTranslate")
		const btnTranslate= document.querySelector('.btTranslate');
		// btnTranslate.style.backgroundColor = "green";
		btnTranslate?.classList.add("background-green");


        let isTranslationEnabled = true; // تعيين المتغير لتتبع حالة الترجمة



        this.statusBarElement.textContent = isTranslationEnabled ?"on"  : "off";




	//==============================================
        // تبديل حالة الترجمة عند النقر على الزر
        this.statusBarElement.addEventListener("click", () => {
            isTranslationEnabled = !isTranslationEnabled;
            this.statusBarElement.textContent = isTranslationEnabled ? "on" : "off";
			btnTranslate?.classList.add("background-green");

            const message = isTranslationEnabled ? "simple-translate start" : "simple-translate stop";
            new Notice(message);
			if (btnTranslate.textContent === "on"){
				btnTranslate?.classList.add("background-green");
				btnTranslate?.classList.remove("background-red");
				// btnTranslate.style.backgroundColor = "green";
			}
			else{
				btnTranslate?.classList.remove("background-green");
				btnTranslate?.classList.add("background-red");
			}
			
        });





		///========================================

        let isTranslationInProgress = false; // متغير لتتبع حالة الترجمة


		// translat srver and grnerat text===============================================
        this.registerDomEvent(document, "mouseup", handleTranslation);


        function handleTranslation(e) {
            if(translationElementCreated)return
            if (!isTranslationInProgress && isTranslationEnabled) { // التأكد من أن الترجمة لم تبدأ بالفعل
                const selection = window.getSelection();

                if (selection && selection.toString().trim() !== '') {
                    const translate = require('translate-google');
                    const range = selection.getRangeAt(0);
                    const rect = range.getBoundingClientRect();

                    const mouseX = e.clientX;
                    const mouseY = e.clientY;
                    const selectionX = rect.left;
                    const selectionY = rect.top;

                    // بدء الترجمة وتعيين المتغير إلى true
                    isTranslationInProgress = true;

                    // ترجمة النص المحدد
                    translate(selection.toString(), { to: langlist.value })
                        .then(res => {
                            // إنشاء وعرض عنصر جديد للترجمة
                            renderTranslation(res, mouseX, mouseY, selectionX, selectionY);
                            // انتهاء الترجمة وتعيين المتغير إلى false
                            isTranslationInProgress = false;
                            return


                        })
                        .catch(err => {
                            console.error(err);
                            new Notice("Translation failed. Please try again.");
                            // في حالة حدوث خطأ، يجب تعيين المتغير إلى false هنا أيضًا
                            isTranslationInProgress = false;
                        });
                }
            }
        }



        // استدعاء الدالة لإزالة العناصر المنشأة مسبقًا عند النقر
        window.addEventListener('click', removeCreatedElements);
    }
}



function renderTranslation(text, mouseX, mouseY, selectionX) {

    const translationElement = document.createElement("div");
    translationElement.textContent = text;
    translationElement.setAttribute("data-created", "true");

    translationElement.classList.add("translation-element", "padding", "font-Arial", "font-size-18px", "background-lightblue", "color", "direction-rtl", "max-width-500px", "z-index");

    translationElement.style.position = "absolute";
    translationElement.style.margin = "auto";
    translationElement.style.top = mouseY + 20 + "px";
    translationElement.style.left = selectionX + "px";

    document.body.appendChild(translationElement);

    translationElementCreated = true;

    // Drag functionality
    let isDragging = false;
    let offsetX, offsetY;

    translationElement.addEventListener("mousedown", startDrag);
    translationElement.addEventListener("mousemove", drag);
    translationElement.addEventListener("mouseup", endDrag);
    translationElement.addEventListener("mouseleave", endDrag);

    function startDrag(e) {
        isDragging = true;
        offsetX = e.clientX - translationElement.getBoundingClientRect().left;
        offsetY = e.clientY - translationElement.getBoundingClientRect().top;
    }

    function drag(e) {
        if (isDragging) {
            translationElement.style.left = e.clientX - offsetX + "px";
            translationElement.style.top = e.clientY - offsetY + "px";
        }
    }

    function endDrag(e) {
        isDragging = false;
    }

    translationElement.addEventListener("click", handleClick);

    function handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Copy functionality
    translationElement.addEventListener("contextmenu", copyText);

    function copyText(e) {
        e.preventDefault();
        const textToCopy = translationElement.textContent;
        navigator.clipboard.writeText(textToCopy).then(function() {
			new Notice('Text copied to clipboard')
        }, function(err) {
            new Notice('Unable to copy text to clipboard: ', err);
        });
    }

}
