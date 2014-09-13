var eVY1mode = 0;

var wordTbl1 = {
	"あ" : 0x00,
	"い" : 0x01,
	"う" : 0x02,
	"え" : 0x03,
	"お" : 0x04,
	"か" : 0x05,
	"き" : 0x06,
	"く" : 0x07,
	"け" : 0x08,
	"こ" : 0x09,
	"が" : 0x0A,
	"ぎ" : 0x0B,
	"ぐ" : 0x0C,
	"げ" : 0x0D,
	"ご" : 0x0E,
	"さ" : 0x15,
	"し" : 0x20,
	"す" : 0x17,
	"せ" : 0x18,
	"そ" : 0x19,
	"ざ" : 0x1A,
	"じ" : 0x25,
	"ず" : 0x1C,
	"ぜ" : 0x1D,
	"ぞ" : 0x1E,
	"た" : 0x29,
	"ち" : 0x36,
	"つ" : 0x3C,
	"て" : 0x2C,
	"と" : 0x2D,
	"だ" : 0x2E,
	"づ" : 0x1C,
	"で" : 0x31,
	"ど" : 0x32,
	"な" : 0x3F,
	"に" : 0x40,
	"ぬ" : 0x41,
	"ね" : 0x42,
	"の" : 0x43,
	"は" : 0x47,
	"ひ" : 0x48,
	"ふ" : 0x49,
	"へ" : 0x4A,
	"ほ" : 0x4B,
	"ば" : 0x4C,
	"び" : 0x4D,
	"ぶ" : 0x4E,
	"べ" : 0x4F,
	"ぼ" : 0x50,
	"ぱ" : 0x51,
	"ぴ" : 0x52,
	"ぷ" : 0x53,
	"ぺ" : 0x54,
	"ぽ" : 0x55,
	"ま" : 0x64,
	"み" : 0x65,
	"む" : 0x66,
	"め" : 0x67,
	"も" : 0x68,
	"や" : 0x6C,
	"ゆ" : 0x6D,
	"よ" : 0x6E,
	"ら" : 0x6F,
	"り" : 0x70,
	"る" : 0x71,
	"れ" : 0x72,
	"ろ" : 0x73,
	"わ" : 0x77,
	"を" : 0x04,
	"ん" : 0x7B
};
var wordTbl2 = {
	"うぃ" : 0x78,
	"うぇ" : 0x79,
	"うぉ" : 0x7A,
	"きゃ" : 0x0F,
	"きゅ" : 0x10,
	"きょ" : 0x11,
	"ぎゃ" : 0x12,
	"ぎゅ" : 0x13,
	"ぎょ" : 0x14,
	"すぃ" : 0x16,
	"ずぃ" : 0x1B,
	"しゃ" : 0x1F,
	"しゅ" : 0x21,
	"しょ" : 0x23,
	"じゃ" : 0x24,
	"じゅ" : 0x26,
	"じょ" : 0x28,
	"しぇ" : 0x22,
	"じぇ" : 0x27,
	"づぁ" : 0x1A,
	"づぃ" : 0x1B,
	"づぇ" : 0x1D,
	"づぉ" : 0x1E,
	"てぃ" : 0x2A,
	"とぅ" : 0x2B,
	"でぃ" : 0x2F,
	"どぅ" : 0x30,
	"てゅ" : 0x33,
	"でゅ" : 0x34,
	"ちゃ" : 0x35,
	"ちゅ" : 0x37,
	"ちょ" : 0x39,
	"ちぇ" : 0x38,
	"つぁ" : 0x3A,
	"つぃ" : 0x3B,
	"つぇ" : 0x3D,
	"つぉ" : 0x3E,
	"にゃ" : 0x44,
	"にゅ" : 0x45,
	"にょ" : 0x46,
	"ひゃ" : 0x56,
	"ひゅ" : 0x57,
	"ひょ" : 0x58,
	"びゃ" : 0x59,
	"びゅ" : 0x5A,
	"びょ" : 0x5B,
	"ぴゃ" : 0x5C,
	"ぴゅ" : 0x5D,
	"ぴょ" : 0x5E,
	"ふぁ" : 0x5F,
	"ふぃ" : 0x60,
	"ふゅ" : 0x61,
	"ふぇ" : 0x62,
	"ふぉ" : 0x63,
	"みゃ" : 0x69,
	"みゅ" : 0x6A,
	"みょ" : 0x6B,
	"りゃ" : 0x74,
	"りゅ" : 0x75,
	"りょ" : 0x76
};

// nsx1 to nsx39 table
// Copyright 2014 gotojo All Rights Reserved. 

var nsx1tbl = [
    "a",        // "あ"
    "i",        // "い"
    "M",        // "う"
    "e",        // "え"
    "o",        // "お"
    "k a",      // "か"
    "k' i",     // "き"
    "k M",      // "く"
    "k e",      // "け"
    "k o",      // "こ"
    "g a",      // "が"
    "g' i",     // "ぎ"
    "g M",      // "ぐ"
    "g e",      // "げ"
    "g o",      // "ご"
    "k' a",     // "きゃ"
    "k' M",     // "きゅ"
    "k' o",     // "きょ"
    "N' a",     // "ぎゃ"
    "N' o",     // "ぎょ"
    "g' M",     // "ぎゅ" 
    "s a",      // "さ"
    "s i",      // "すぃ"
    "s M",      // "す"
    "s e",      // "せ"
    "s o",      // "そ"
    "dz a",     // "ざ"
    "dz i",     // "ずぃ"
    "dz M",     // "ず"
    "dZ e",     // "ぜ"
    "dz o",     // "ぞ"
    "S a",      // "しゃ"
    "S i",      // "し"
    "S M",      // "しゅ"
    "S e",      // "しぇ"
    "S o",      // "しょ"
    "dZ a",     // "じゃ"
    "dZ i",     // "じ"
    "dZ M",     // "じゅ"
    "dZ e",     // "じぇ"
    "dZ o",     // "じょ"
    "t a",      // "た"
    "t' i",     // "てぃ"
    "t M",      // "とぅ"
    "t e",      // "て"
    "t o",      // "と"
    "d a",      // "だ"
    "d' i",     // "でぃ"
    "d M",      // "どぅ"
    "d e",      // "で"
    "d o",      // "ど"
    "t' M",     // "てゅ"
    "d' M",     // "でゅ"
    "tS a",     // "ちゃ"
    "tS i",     // "ち"
    "tS M",     // "ちゅ"
    "tS e",     // "ちぇ"
    "tS o",     // "ちょ"
    "ts a",     // "つぁ"
    "ts i",     // "つぃ"
    "ts M",     // "つ"
    "ts e",     // "つぇ"
    "ts o",     // "つぉ"
    "n a",      // "な"
    "J i",      // "に"
    "n M",      // "ぬ"
    "n e",      // "ね"
    "n o",      // "の"
    "J a",      // "にゃ"
    "J M",      // "にゅ"
    "J o",      // "にょ"
    "h a",      // "は"
    "C i",      // "ひ"
    "p\\ M",    // "ふ"
    "h e",      // "へ"
    "h o",      // "ほ"
    "b a",      // "ば"
    "b' i",     // "び"
    "b M",      // "ぶ"
    "b e",      // "べ"
    "b o",      // "ぼ"
    "p a",      // "ぱ"
    "p' i",     // "ぴ"
    "p M",      // "ぷ"
    "p e",      // "ぺ"
    "p o",      // "ぽ"
    "C a",      // "ひゃ"
    "C M",      // "ひゅ"
    "C o",      // "ひょ"
    "b' a",     // "びゃ"
    "b' M",     // "びゅ"
    "b' o",     // "びょ"
    "p' a",     // "ぴゃ"
    "p' M",     // "ぴゅ"
    "p' o",      // "ぴょ"
    "p\\ a",     // "ふぁ"
    "p\\' i",    // "ふぃ"
    "p\\' M",    // "ふゅ"
    "p\\ e",     // "ふぇ"
    "p\\ o",     // "ふぉ"
    "m a",      // "ま"
    "m i",      // "み"
    "m M",      // "む"
    "m e",      // "め"
    "m o",      // "も"
    "m' a",     // "みゃ"
    "m' M",     // "みゅ" 
    "m' o",     // "みょ"
    "j a",      // "や"
    "j M",      // "ゆ"
    "j o",      // "よ"
    "4 a",      // "ら"
    "4' i",     // "り"
    "4 M",      // "る"
    "4 e",      // "れ"
    "4 o",      // "ろ"      
    "4' o",     // "りょ" 
    "4' M",     // "りゅ"
    "4' a",     // "りゃ" 
    "w a",      // "わ"
    "w i",      // "ゐ"
    "w e",      // "ゑ"
    "o",        // "を"
    "N\\",      // "ん"
    "m",        // "ん"
    "N",        // "ん"
    "J",        // "ん"
    "n"        // "ん"
];

function getSysEx(str,output) {
	var word;
	if (str in wordTbl1) {
		word = wordTbl1[str];
	} else if (str in wordTbl2) {
		word = wordTbl2[str];
	} else {
		return null;
	}
	if (evy1mode) {
		var sysExHead = [0xF0, 0x43, 0x79, 0x09, 0x00, 0x50, 0x10];
		var data =　sysExHead.concat();
		var worddata=nsx1tbl[word];
		var test="test";
		for (var i=0; i<worddata.length;i++) {
			data.push(worddata.charCodeAt(i));
		}
		data.push(0);
		data.push(0xf7);
		return data;		
	} else {
		var sysExHead = [0xF0, 0x43, 0x79, 0x09, 0x11];
		var data =　sysExHead.concat();
		data.push(0x0A);
		data.push(0x00);
		data.push(word);
		data.push(0xf7);
		return data;
	}
};

var sysExHead39 = [0xF0, 0x43, 0x79, 0x09, 0x11];
var noteonmsg = [0x90, 0x40, 0x7f];
var noteoffmsg = [0x80, 0x40, 0x40];
function getAtari(interval) {
	var timestamp = 0;
	var data =　sysExHead39.concat();
	var messages = [];
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["あ"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:noteonmsg});
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:noteoffmsg});

	messages.push({timestamp:timestamp,message:noteonmsg});
	data = [];
	data =　sysExHead39.concat();
	data.push(wordTbl1["た"]);
	data.push(0x0A);
	data.push(0x00);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:noteoffmsg});

	messages.push({timestamp:timestamp,message:noteonmsg});
	data = [];
	data =　sysExHead39.concat();
	data.push(wordTbl1["り"]);
	data.push(0x0A);
	data.push(0x00);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:noteoffmsg});
	return messages;
}