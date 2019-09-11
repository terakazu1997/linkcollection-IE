function replaceText(str){
    str =str.replace(/[ぁ-んａ-ｚＡ-Ｚ０-９]/g, function(chr) {
        var replaceChr = chr.match(/[ぁ-ん]/g)?chr.charCodeAt(0) + 0x60:chr.charCodeAt(0) - 65248;
        return String.fromCharCode(replaceChr);
    })
    str = str.match(/[a-z]/g)? str.toUpperCase(): str;
    return str;
}