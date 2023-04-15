function removeNonHexCharacters(hexString) {
    // 16進数以外の文字を除去する正規表現
    const pattern = /[^0-9a-fA-F]/g;
    return hexString.replace(pattern, "");
}

function hexToString() {
    let hexInput = document.getElementById("hex-input").value;
    hexInput = removeNonHexCharacters(hexInput)
    let str = "";
    for (let i = 0; i < hexInput.length; i += 2) {
      const hexCode = hexInput.substr(i, 2);
      str += hexToStringTable[parseInt(hexCode, 16)];
    }
    document.getElementById("string-input").value = str;
    
}
  
function stringToHex() {
    const stringInput = document.getElementById("string-input").value;
    let hex = "";
    for (let i = 0; i < stringInput.length; i++) {
      const charCode = stringInput.charCodeAt(i).toString(16);
      hex += ("0" + charCode).slice(-2);
    }
    document.getElementById("hex-input").value = hex;
}
  


const hexToStringTable = [
"BUG",
"イ゛",
"ウ゛",
"エ゛",
"オ゛",
"ガ",
"ギ",
"グ",
"ゲ",
"ゴ",
"ザ",
"ジ",
"ズ",
"ゼ",
"ゾ",
"ダ",
"ヂ",
"ヅ",
"デ",
"ド",
"ナ゛",
"ニ゛",
"ヌ゛",
"ネ゛",
"ノ゛",
"バ",
"ビ",
"ブ",
"ボ",
"マ゛",
"ミ゛",
"ム゛",
"ィ゛",
"あ゛",
"い゛",
"う゛",
"え゛",
"お゛",
"が",
"ぎ",
"ぐ",
"げ",
"ご",
"ざ",
"じ",
"ず",
"ぜ",
"ぞ",
"だ",
"ぢ",
"づ",
"で",
"ど",
"な゛",
"に゛",
"ぬ゛",
"ね゛",
"の゛",
"ば",
"び",
"ぶ",
"べ",
"ぼ",
"ま゛",
"パ",
"ピ",
"プ",
"ポ",
"ぱ",
"ぴ",
"ぷ",
"ぺ",
"ぽ",
"ま゜",
"み゜",
"BUG",
"BUG",
"も゜",
"BUG",
"BUG",
"終端",
"BUG",
"<プレイヤー名>",
"<ライバル名>",
"”ポケモン”",
"BUG",
"……",
"BUG",
"BUG",
"※6",
"※6",
"”パソコン”",
"”わざマシン”",
"”トレーナー”",
"”ロケットだん”",
"゛゜",
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"V",
"S",
"L",
"M",
":",
"ぃ",
"ぅ",
"「",
"」",
"『",
"』",
"・",
"…",
"ぁ",
"ぇ",
"ぉ",
"※8",
"※8",
"※8",
"※8",
"※8",
"※8",
" ",
"ア",
"イ",
"ウ",
"エ",
"オ",
"カ",
"キ",
"ク",
"ケ",
"コ",
"サ",
"シ",
"ス",
"セ",
"ソ",
"タ",
"チ",
"ツ",
"テ",
"ト",
"ナ",
"ニ",
"ヌ",
"ネ",
"ノ",
"ハ",
"ヒ",
"フ",
"ホ",
"マ",
"ミ",
"ム",
"メ",
"モ",
"ヤ",
"ユ",
"ヨ",
"ラ",
"ル",
"レ",
"ロ",
"ワ",
"ヲ",
"ン",
"ッ",
"ャ",
"ュ",
"ョ",
"ィ",
"あ",
"い",
"う",
"え",
"お",
"か",
"き",
"く",
"け",
"こ",
"さ",
"し",
"す",
"せ",
"そ",
"た",
"ち",
"つ",
"て",
"と",
"な",
"に",
"ぬ",
"ね",
"の",
"は",
"ひ",
"ふ",
"へ",
"ほ",
"ま",
"み",
"む",
"め",
"も",
"や",
"ゆ",
"よ",
"ら",
"り",
"る",
"れ",
"ろ",
"わ",
"を",
"ん",
"っ",
"ゃ",
"ゅ",
"ょ",
"ー",
"゜",
"゛",
"？",
"！",
"。",
"ァ",
"ゥ",
"ェ",
"△※9",
"▼※9",
"▼",
"♂",
"円",
"×",
"．",
"／",
"ォ",
"♀",
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"]