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
var sysExHead39 = [0xF0, 0x43, 0x79, 0x09, 0x11];
function getAtari(interval) {
	var timestamp = 0;
	var data =　sysExHead39.concat();
	var messages = [];
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["あ"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:[0x90,60,0x7f]});
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,60,0x40]});

	messages.push({timestamp:timestamp,message:[0x90,64,0x7f]});
	data = [];
	data =　sysExHead39.concat();
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["た"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,64,0x40]});

	messages.push({timestamp:timestamp,message:[0x90,72,0x7f]});
	data = [];
	data =　sysExHead39.concat();
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["り"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,72,0x40]});
	return messages;
}

function getMigi(interval) {
	var timestamp = 0;
	var data =　sysExHead39.concat();
	var messages = [];
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["み"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:[0x90,60,0x7f]});
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,60,0x40]});

	messages.push({timestamp:timestamp,message:[0x90,72,0x7f]});
	data = [];
	data =　sysExHead39.concat();
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["ぎ"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,72,0x40]});
	return messages;
}

function getHidari(interval) {
	var timestamp = 0;
	var data =　sysExHead39.concat();
	var messages = [];
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["ひ"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:[0x90,60,0x7f]});
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,60,0x40]});

	messages.push({timestamp:timestamp,message:[0x90,60,0x7f]});
	data = [];
	data =　sysExHead39.concat();
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["だ"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,60,0x40]});

	messages.push({timestamp:timestamp,message:[0x90,72,0x7f]});
	data = [];
	data =　sysExHead39.concat();
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["り"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,72,0x40]});
	return messages;
}

function getMannaka(interval) {
	var timestamp = 0;
	var data =　sysExHead39.concat();
	var messages = [];
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["ま"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:[0x90,60,0x7f]});
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,60,0x40]});

	messages.push({timestamp:timestamp,message:[0x90,64,0x7f]});
	data = [];
	data =　sysExHead39.concat();
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["ん"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,64,0x40]});

	messages.push({timestamp:timestamp,message:[0x90,72,0x7f]});
	data = [];
	data =　sysExHead39.concat();
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["な"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,72,0x40]});

	messages.push({timestamp:timestamp,message:[0x90,72,0x7f]});
	data = [];
	data =　sysExHead39.concat();
	data.push(0x0A);
	data.push(0x00);
	data.push(wordTbl1["か"]);
	data.push(0xf7);
	messages.push({timestamp:timestamp,message:data});
	timestamp+=interval;
	messages.push({timestamp:timestamp,message:[0x80,72,0x40]});
	return messages;
}

