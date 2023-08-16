const IPA_TO_HMBR = new Map([
    // consonants
    ["p", "ㅍ"],
    ["b", "ㅂ"],
    ["t", "ㅌ"],
    ["d", "ㄷ"],
    ["k", "ㅋ"],
    ["g", "ㄱ"],
    ["ɡ", "ㄱ"],
    ["tʃ", "ᅉ"],
    ["ʧ", "ᅉ"],
    ["ts", "ᅉ"],
    ["dʒ", "ᅈ"],
    ["ʤ", "ᅈ"],
    ["f", "ᅋ"],
    ["v", "ᅄ"],
    ["θ", "ᅅ"],
    ["ð", "ᅂ"],
    ["s", "ㅅ"],
    ["z", "ㅾ"],
    ["ʃ", "ㅿ"],
    ["ʒ", "ᅆ"],
    ["h", "ㅎ"],
    ["m", "ㅁ"],
    ["n", "ㄴ"],
    ["ŋ", "ㅇ"],
    ["w", "ᅇ"],
    ["j", "ᅙ"],
    ["l", "ㄹ"],
    ["r", "ꥶ"],

    // vowels, some with dipthongs (*)
    ["ɪ", "ㅣ"],
    ["i", "ㅣ"],
    ["e", "ㅔ"],
    ["æ", "ㅐ"],
    ["ɒ", "ㅗ"],
    ["ɔ", "ㅗ"],
    ["o", "ㅗ"],
    ["ʊ", "ㅜ"],
    ["u", "ㅜ"],
    ["ʌ", "ㅓ"],
    ["ɜ", "ㅓ"],
    ["ɑ", "ㅏ"],
    ["a", "ㅐ"],
    ["ə", "ㆍ"],
    ["aɪ", "ㅏ*ㅇㅣ"],
    ["ʌɪ", "ㅏ*ㅇㅣ"],
    ["eɪ", "ㅔ*ㅇㅣ"],
    ["ɔɪ", "ㅗ*ㅇㅣ"],
    ["aʊ", "ㅏ*ㅇㅜ"],
    ["ɒʊ", "ㅗ*ㅇㅜ"],
    ["əʊ", "ㅗ*ㅇㅜ"],
    ["ɛ", "ㅔ"],
    ["ɪə", "ㅣ*ㅇㆍ"],
    ["ʊə", "ㅜ*ㅇㆍ"],

    // other characters
    ["ˈ", "ˈ"],
    ["ˌ", "ˈ"],
    [" ", " "] 
]);

const COMPAT_TO_CHOSEONG = new Map([
    [0x3131, 0x1100],    // "ㄱ"
    [0x3132, 0x1101],    // "ㄲ"
    [0x3134, 0x1102],    // "ㄴ"
    [0x3137, 0x1103],    // "ㄷ"
    [0x3138, 0x1104],    // "ㄸ"
    [0x3139, 0x1105],    // "ㄹ"
    [0x3141, 0x1106],    // "ㅁ"
    [0x3142, 0x1107],    // "ㅂ"
    [0x3143, 0x1108],    // "ㅃ"
    [0x3145, 0x1109],    // "ㅅ"
    [0x3146, 0x110A],    // "ㅆ"
    [0x3147, 0x110B],    // "ㅇ"
    [0x3148, 0x110C],    // "ㅈ"
    [0x3149, 0x110D],    // "ㅉ"
    [0x314A, 0x110E],    // "ㅊ"
    [0x314B, 0x110F],    // "ㅋ"
    [0x314C, 0x1110],    // "ㅌ"
    [0x314D, 0x1111],    // "ㅍ"
    [0x314E, 0x1112],    // "ㅎ"
    [0x3182, 0x1145],    // "ᅅ"
    [0x3183, 0x1146],    // "ᅆ"
    [0x3180, 0x1147],    // "ᅇ"
    [0x317F, 0x1140],    // "ㅿ"
    [0x317E, 0x1136],    // "ㅾ"
    [0x3184, 0x1157],    // "ᅗ"
    [0x3178, 0x112B],    // "ᄫ"
    [0x317C, 0x112F],    // "ᄯ"
    [0x3186, 0x1159],    // "ㆆ"
]);

const CHOSEONG_TO_JONGSEONG = new Map([
    [0x1100, 0x11A8],    // "ㄱ"
    [0x1101, 0x11A9],    // "ㄲ"
    [0x1102, 0x11AB],    // "ㄴ"
    [0x1103, 0x11AE],    // "ㄷ"
    [0x1105, 0x11AF],    // "ㄹ"
    [0x1106, 0x11B7],    // "ㅁ"
    [0x1107, 0x11B8],    // "ㅂ"
    [0x1109, 0x1109],    // "ㅅ"
    [0x110A, 0x11BB],    // "ㅆ"
    [0x110B, 0x11BC],    // "ㅇ"
    [0x110C, 0x11BD],    // "ㅈ"
    [0x110E, 0x11BE],    // "ㅊ"
    [0x110F, 0x11BF],    // "ㅋ"
    [0x1110, 0x11C0],    // "ㅌ"
    [0x1111, 0x11C1],    // "ㅍ"
    [0x1112, 0x1112],    // "ㅎ"
    [0x1146, 0x1146],    // "ᅆ"
    [0x1147, 0x1147],    // "ᅇ"
    [0x1119, 0x11D0],    // "ᄙ"
    [0xA976, 0xD7DB],    // "ꥶ" -> "ퟛ" 
    [0x1149, 0x1149],    // "ᅉ"
    [0x1148, 0x1148],    // "ᅈ"
    [0x114B, 0x114B],    // "ᅋ"
    [0x1144, 0x1144],    // "ᅄ"
    [0x1145, 0x1145],    // "ᅅ"
    [0x1142, 0x1142],    // "ᅂ"
    [0x1136, 0x1136],    // "ㅾ"
    [0x1140, 0x1140]     // "ㅿ"
]);

const COMPAT_TO_JONGSEONG = new Map([
    [0x11A7, 0x11A7],    // jongseong base number
    [0x3131, 0x11A8],    // "ㄱ"
    [0x3132, 0x11A9],    // "ㄲ"
    [0x3134, 0x11AB],    // "ㄴ"
    [0x3137, 0x11AE],    // "ㄷ"
    [0x3139, 0x11AF],    // "ㄹ"
    [0x3141, 0x11B7],    // "ㅁ"
    [0x3142, 0x11B8],    // "ㅂ"
    [0x3145, 0x11BA],    // "ㅅ"
    [0x3146, 0x11BB],    // "ㅆ"
    [0x3147, 0x11BC],    // "ㅇ"
    [0x3148, 0x11BD],    // "ㅈ"
    [0x314A, 0x11BE],    // "ㅊ"
    [0x314B, 0x11BF],    // "ㅋ"
    [0x314C, 0x11C0],    // "ㅌ"
    [0x314D, 0x11C1],    // "ㅍ"
    [0x314E, 0x11C2],    // "ㅎ"
    [0x3182, 0x11F1],    // "ᅅ"
    [0x3183, 0x11F2],    // "ᅆ"
    [0x3180, 0x11EE]     // "ᅇ"
]);

const CHOSEONG_BASE = 0x1100;
const JUNGSEONG_BASE = 0x1161;
const JONGSEONG_BASE = 0x11A7;
const SYLLABLE_BASE = 0xAC00;
const JUNGSEONG_NUM = 21;
const JONGSEONG_NUM = 28;

var HMBRString;

/**
 * When the "Convert" button is pressed on the frontend screen, the english string is converted into the HMBR Korean phonetic Hangeul. 
 * On the screen the IPA and the HMBR equivalent will be displayed.
 */
function convertButtonClicked() {
    // erasing previous conversions.
    document.getElementById("hmbr1").innerHTML = "";
    document.getElementById("connectButtonsList").innerHTML = "";

    const englishString = document.getElementById("english").value;
    var IPAString = "";
    if (englishString === "") {
        IPAString = document.getElementById("ipa").value;
    } else {
        IPAString = findIPA(englishString);
    }
    document.getElementById("ipa").value = IPAString;
    HMBRString = IPAtoHMBR(IPAString);
    
    if (HMBRString.startsWith("Error")) {
        alert("The character \\" + HMBRString.substring(6) + "\\ is not listed in the IPA to HMBR map.");
    } else {
        insertHMBR(jamosToSyllable(HMBRString));
    }
}

function findIPA(englishString) {
    const sentence = englishString.split(" ");
    var ret = "";
    for (let x in sentence) {
        const word = localStorage.getItem(sentence[x].toUpperCase());
        if (word == null) {
            alert("The word \'" + sentence[x] + "\' does not exist in the dictionary. Try again.");
            return "";
        }
        ret += word + " ";
    }
    return ret;
}

function IPAtoHMBR(IPAString) {
    // This is our returning string.
    var HMBRString = "";

    for (let i = 0; i < IPAString.length; i++) {
        const IPAChar = IPAString[i];

        // Checking if it's a vowel without a consonant at the front.
        if (isVowel(IPAChar)) {
            // If the vowel is NOT the first character of the word,
            if (i-1 >= 0) {
                // Retrieve the previous character
                const IPAPrevChar = IPAString[i-1];
                
                // If the previous character is either a vowel, or a space, or an accent symbol then we put \ㅇ\ in front of the current character.
                if (isVowel(IPAPrevChar) || IPAPrevChar === " " || IPAPrevChar === "ˈ" || IPAPrevChar === "ˌ" || IPAPrevChar === "ː") {
                    HMBRString += "ㅇ";
                }
            }

            // If the vowel IS the first character of the word, we also put \ㅇ\ as the first HMBR character.
            else {
                HMBRString += "ㅇ";
            }
        }
        
        // We append the next char to the current char to check if we need to do a two-char conversion.
        var IPANextChar = "1";
        
        if (i+1 < IPAString.length) {
            IPANextChar = IPAString[i+1];
        }
        const IPATwoChars = IPAChar + IPANextChar;
        const HMBRTwoChars = IPA_TO_HMBR.get(IPATwoChars);

        // If we have a two character mapping, we add that to the HMBRString.
        if (HMBRTwoChars != undefined) {
            HMBRString += HMBRTwoChars;
            i++;
        }

        // If \s\ is the first character of the word with a vowel following after, then it is \ㅆ\.
        else if (IPAChar === "s" && i == 0 && isVowel(IPANextChar)) {
            HMBRString += "ㅆ";
        }

        // For \l\:
        else if (IPAChar === "l") {
            // If \l\ is the first character, it's normal mapping
            if (i == 0) {
                HMBRString = "ㄹ";
            }

            // If \l\ is not the first character
            else {
                const IPAPrevChar = IPAString.charAt(i-1);
                // If the previous character of \l\ causes a L Cluster, we add the filler jongseong and also add another \ㄹ\ for the choseong of the next syllable.
                if (isLNCluster(IPAPrevChar)) {
                    HMBRString += String.fromCodePoint(0x1160) + "ㄹ";
                    if (isVowel(IPANextChar)){
                        HMBRString += "ㄹ";
                    }
                } 
                
                // If \l\ is in between 2 vowels, we add two \ㄹ\s
                else if (isVowel(IPAPrevChar) && i+1 < IPAString.length && isVowel(IPANextChar)) {
                    HMBRString += "ㄹㄹ";
                }

                // If it's not any of the above, it is normal mapping
                else {
                    HMBRString += "ㄹ";
                }
            } 
        }

        // For \n\ clusters
        else if (IPAChar === "n" && i > 0 && isLNCluster(IPAString.charAt(i-1))) {
            HMBRString += String.fromCodePoint(0x1160) + "ㄴ";
        }

        // If we have \ː\, we extend the previous vowel with a dipthong.
        else if (IPAChar === 'ː') {
            const IPAPrevChar = IPAString.charAt(i-1);
            HMBRString += "*ㅇ";
            HMBRString += IPA_TO_HMBR.get(IPAPrevChar);
        } 
        
        // If we do not have a two-char mapping, then it is just a simple one character mapping.
        else {
            const HMBRChar = IPA_TO_HMBR.get(IPAChar);
            if (HMBRChar == undefined) {
                return "Error " + IPAChar;
            }

            HMBRString += HMBRChar;
        }
    }
    return HMBRString;
}

function jamosToSyllable(jamos) {
    let i = 0;
    let len = jamos.length;
    var ret = "";

    while (i+1 < len) {
        const firstchar = jamos.codePointAt(i);
        const secondchar = jamos.codePointAt(i+1);
        var thirdchar = 0; var fourthchar = 0;
        if (i+2 < len) {thirdchar = jamos.codePointAt(i+2);}
        if (i+3 < len) {fourthchar = jamos.codePointAt(i+3);}

        if (isChoseong(firstchar) && isJungseong(secondchar) && isJongseongWithC2(thirdchar, fourthchar)) {
            ret += findSyllable(firstchar, secondchar, thirdchar);
            i = i+3;
        } else if (isChoseong(firstchar) && isJungseong(secondchar)) {
            ret += findSyllable(firstchar, secondchar, 0);
            i = i+2;
        } else {
            ret += String.fromCodePoint(firstchar);
            i++;
        }

    }
    
    // Append the last character if needed.
    if (i == len-1) {ret += jamos.charAt(i);}
    return ret;
}

function isChoseong(c) {
    // If it's normal jamo
    if (c >= 0x1100 && c <=0x115F) {return true;}
    
    // If it's compatibility jamo
    if ((c >= 0x3131 && c <= 0x314E) || (c >= 0x3165 && c <= 0x3186)) {return true;}
    
    // If it's jamo extended-A
    if (c >= 0xA960 && c <= 0xA97F) {return true;}
    
    return false;
}

function isJungseong(c) {
    // If it's normal jamo
    if (c >= 0x1160 && c <= 0x11A7) {return true;} 
    
    // If it's compatibility jamo
    if ((c >= 0x314F && c <= 0x3163) || (c >= 0x3187 && c <= 0x318E)) {return true;}

    // If it's jamo extended-B
    if (c >= 0xD7B0 && c <= 0xD7C6) {return true;}
    
    return false;
}

function isJongseongWithC2(c1, c2) {
    HMBRjongseongs = [0x314D, 0x3142, 0x314C, 0x3137, 0x314B, 0x3131, 0x3141, 0x3134, 0x3147, 0x3139, 0xA976, 0xD7DB];

    // c1 should be the listed jongseong allowed in HMBR.
    if (!HMBRjongseongs.includes(c1)) {return false;}

    // if c1 is a consonant as well as c2, then c1 is a jongseong
    if (isChoseong(c1) && isChoseong(c2)) {return true;}

    // if c1 is consonant and c2 is blank, a space or the accent character, then c1 is jongseong
    if (isChoseong(c1) && (c2 == 0 || c2 == 0x0020 || c2 == 0x02C8)) {return true;}

    return false;
}

function isJongseong(c) {
    return (c >= 0x11A8 && c <= 0x11FF) || (c >= 0xD7CB && c <= 0xD7FB);
}

function findSyllable(choseong, jungseong, jongseong) {
    // Convert compatibility jamos to normal jamos
    choseong = compatToChoseong(choseong);
    jungseong = compatToJungseong(jungseong);
    jongseong = compatToJongseong(jongseong);

    // If these consist of modern hangul, we can use this simple formula, using the 완성형 자모 결합 유니코드
    if (isModernHangul(choseong, jungseong, jongseong)) {
        // Syllable = SyllableBase + ((ChoseongIndex * JungseongNum) + JungseongIndex) * JongseongNum + JongseongIndex
        if (jongseong == 0) {jongseong = JONGSEONG_BASE;}
        const syllable = SYLLABLE_BASE + (((choseong - CHOSEONG_BASE) * JUNGSEONG_NUM) + (jungseong - JUNGSEONG_BASE)) * JONGSEONG_NUM + (jongseong - JONGSEONG_BASE);
        return String.fromCodePoint(syllable);
    }
    
    // if there is YetHangul, we return back the list with all 3 different jamos.
    var ret = String.fromCodePoint(choseong);
    
    // However, if the jungseong is the jungseong filler we do not add it to our HMBR string.
    if (jungseong != 0x1160) {
        ret += String.fromCodePoint(jungseong);
    }

    if (jongseong != JONGSEONG_BASE && jongseong != 0) {
        ret += String.fromCodePoint(jongseong);
    }

    return ret;
}

function compatToChoseong(c) {
    if ((c >= 0x3131 && c <= 0x314E) || (c >= 0x3165 && c <= 0x3186)) {
        if (COMPAT_TO_CHOSEONG.has(c)) {
            return COMPAT_TO_CHOSEONG.get(c);
        }
    }
    return c;
}

function compatToJungseong(c) {
    if (c == 0x318D) {return 0x119E;}
    if (c == 0x1160) {return c;}
    return JUNGSEONG_BASE + c - 0x314F;
}

function compatToJongseong(c) {
    if (c == 0) {return 0;}
    if ((c >= 0x3131 && c <= 0x314E) || (c >= 0x3165 && c <= 0x3186) || c == JONGSEONG_BASE) {
        if (COMPAT_TO_JONGSEONG.has(c)) {
            return COMPAT_TO_JONGSEONG.get(c);
        }
    } 

    return CHOSEONG_TO_JONGSEONG.get(c);
}

function isModernHangul(choseong, jungseong, jongseong) {
    return (choseong >= 0x1100 && choseong <= 0x1112) && (jungseong >= 0x1161 && jungseong <= 0x1175) && ((jongseong >= 0x11A8 && jongseong <= 0x11C2) || jongseong == 0);
}

function ipaInputClicked() {
    document.getElementById("english").value = "";
    document.getElementById("ipa").select();
}

function isVowel(c) {
    // If the first character of c is from any of the vowels in our IPA list, it is a vowel. 
    // (There are no overlaps)
    const vowels = ["ɪ", "i", "e", "æ", "ɒ", "ɔ", "ʊ", "u", "ʌ", "ɝ", "ɜ", "ɑ", "a", "ə", "ɛ", "o"];
    return vowels.includes(c);
}

function insertHMBR(s) {
    // We find instances of the accent character or the dipthong character.
    var accentIndex = s.indexOf("ˈ");
    var dipthongIndex = s.indexOf("*");

    // If there are no accent characters or dipthong characters, we just output the found HMBR in the normal font size.
    if (accentIndex == -1 && dipthongIndex == -1) {
        document.getElementById("hmbr1").innerHTML = s;
    }

    // If there are one or more accent/dipthong characters, we change the font size.
    else {
        // We traverse through the string and increase/decrease the font size of the character that comes after the accent/dipthong character.
        
        // We first set a temporary string for traversal.
        var tmp = s;

        // The loop stops when the string no longer has any accent/dipthong characters.
        while (accentIndex != -1 || dipthongIndex != -1) {
            // We first check which character to do first.
            if (accentIndex == -1) {
                // We're working with dipthongs.
                tmp = tmpAfterDipthongInsert(tmp, dipthongIndex);
            } else if (dipthongIndex == -1) {
                // We're working with accents.
                tmp = tmpAfterAccentInsert(tmp, accentIndex);
            } else if (accentIndex < dipthongIndex) {
                // We're working with accents first
                tmp = tmpAfterAccentInsert(tmp, accentIndex);
            } else {
                // We're working with dipthongs.
                tmp = tmpAfterDipthongInsert(tmp, dipthongIndex);
            }

            // We now find new indices for accent and dipthong characters.
            accentIndex = tmp.indexOf("ˈ");
            dipthongIndex = tmp.indexOf("*");
        }

        // If the program is out of the above loop it means that it has found all the accent/dipthong characters in the string.
        // We add on the remaining string onto the HTML.
        document.getElementById("hmbr1").insertAdjacentHTML("beforeend", tmp);
    }
}

function tmpAfterDipthongInsert(s, i) {
    // If * is not the first character of the string
    if (i != 0) {
        // We insert the string before * with normal size.
        const prev = s.substring(0, i);
        document.getElementById("hmbr1").insertAdjacentHTML("beforeend", prev);
    }

    // We move onto the character that is being decreased.
    i++;

    // We find the string that needs to be changed in size
    var changingString;
    // if the current character is a syllable, we change this syllable.
    if (isSyllable(s.codePointAt(i))) {
        changingString = s.substring(i, i+1);
        i++;
    } 
    
    // If the current character is a jamo (yethangul cannot be formed as one syllable),
    else {
        // We add the first two characters being choseong and jungseong.
        changingString = s.substring(i, i+2);
        // If the third character is a jongseong, we also add this character to the changing string.
        if (isJongseong(s.codePointAt(i+2))) {
            changingString += s.substring(i+2, i+3);
            i += 3;
        } else {
            i += 2;
        }
    }

    // Insert the changing string in the decreased font size.
    document.getElementById("hmbr1").insertAdjacentHTML("beforeend", '<span style="font-size:25px">'+changingString+'</span>');

    // We return back the substring of s, cutting the front part that has been inserted.
    return s.substring(i);
}

function tmpAfterAccentInsert(s, i) {
    // We get the substring of s, from start to the accent character.

    var initString = s.substring(0, i);

    // we find the index of the first syllable that has a vowel after this index.
    const syllableIndex = firstSyllableIndex(s, i);

    if (syllableIndex == -1) {
        // There is an error. We reset the HMBR field and put up an error message.
        alert("No syllable was found after the accent character. IPA is incorrect.");
        document.getElementById("hmbr1").innerHTML = "";
        return "";
    }

    // We save the head of the string including the first character until the syllable found above. These are saved in normal size.
    initString += s.substring(i+1, syllableIndex);
    document.getElementById("hmbr1").insertAdjacentHTML("beforeend", initString);

    // Setting the new traversing index to the syllable found.
    i = syllableIndex;
    
    // This is the string that contains the syllable that is to be changed of size.
    var changingString;

    // If the syllable is a modern syllable it is represented by 1 unicode character. So this is the only character to be enlarged.
    if (isSyllable(s.codePointAt(i))) {
        changingString = s.substring(i, i+1);
        i++;
    }

    // If the syllable is a yethangul syllable it could be represented by 2 or 3 unicode characters.
    else {
        // We first include the first to characters.
        changingString = s.substring(i, i+2);

        // Then we check if the third character is a jongseong, i.e., if it's included in the current syllable.
        if (isJongseong(s.codePointAt(i+2))) {
            // If it is a jongseong we add this last character to the changing string.
            changingString += s.substring(i+2, i+3);
            
            // Then traverse the index.
            i += 3;
        } else {
            i += 2;
        }
    }

    // We save this string with increased font size.
    document.getElementById("hmbr1").insertAdjacentHTML("beforeend", '<span style="font-size:50px">'+changingString+'</span>');

    // We return back the substring of s, cutting the front part that has been put into the html already.
    return s.substring(i);
}

function firstSyllableIndex(s, i) {
    for (let j = i; j < s.length; j++) {
        const c = s.codePointAt(j);
 
        // If it's a modern syllable, this unicode character would carry a vowel inside. So we return this index.
        if (isSyllable(c)) {
            return j;
        }

        // If it's a yethangul syllable, we look for the first instance of a vowel excluding the filler jungseong (0x1160).
        if (isJungseong(c) && c != 0x1160) {
            // When found, we return the index prior to this character as it will be the choseong of the character, i.e., the start of the syllable.
            return j-1;
        }
    }
    
    // If there are no syllables, we return -1
    return -1;
}

function isSyllable(c) {
    return c >= 0xAC00 && c <= 0xD7AF;
}

function isLNCluster(c) {
    const LNClusterConsonants = ["p", "b", "k", "g", "s", "v", "f", "t", "d", "z"];
    return LNClusterConsonants.includes(c);
}

function copyToClipboardClicked() {
    var from = document.getElementById("hmbr1");
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

function addButtonClicked() {
    const eng = document.getElementById("denglish").value;
    const ipa = document.getElementById("dipa").value;
    localStorage.setItem(eng.toUpperCase(), ipa);
    alert("\"" + eng + "\" added to the dictionary.");
}

function connectButtonClicked() {
    var buttons = document.getElementById("connectButtonsList");
    //var hmbr = document.getElementById("hmbr1").textContent.trim();
    var hmbr = HMBRString.replaceAll('ˈ', '').trim();
    var i = hmbr.indexOf(' ');
    document.getElementById("hmbr").innerHTML = hmbr;
    //document.getElementById("hmbr").innerHTML = "first index of a space is found.";
    while (i != -1 && i < hmbr.length) {
        // create new button element
        var button = document.createElement('BUTTON');
        var text = document.createTextNode(i);
        button.appendChild(text);
        button.onclick = function(i) {
            // handling when the individual connect buttons are clicked.
            connect(i);
        }
        buttons.appendChild(button);
        i = hmbr.indexOf(' ', i+1);
    }
}

function connect(i) {
    if (HMBRString.charAt(i+1) == "ㅇ") {
        
    }
}
