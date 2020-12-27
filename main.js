function main() {
    //////////Remove all empty spaces.
    String.prototype.removeSpaces = function() { 
        return this.split(``).reduce((t,d) => {
            if (d !== ` `) {
                t.push(d);
            }
            return t;
        },[]).join(``);
    }
    //////////Add a space between each character.
    String.prototype.addSpacesBetween = function() { 
        return this.split(``).reduce((t,d) => {
            d += ` `
            t.push(d);
            return t;
        },[]).join(``);
    }
    //////////Add a custom character between each pre-existing character.
    String.prototype.addCustomBetween = function(v) { 
        return this.split(``).reduce((t,d) => {
            d += `${v}`;
            t.push(d);
            return t;
        },[]).join(``);
    }
    //////////Letters switch between lowercase and uppercase, every other one.
    String.prototype.everyOther = function() {
        return this.split(``).reduce((t,d,ind) => {
            const letter = ((ind % 2) === 0) ? d.toUpperCase() : d.toLowerCase();
            t.push(letter);
            return t;
        },[]).join(``);
    }
    //////////Last letter of string is made uppercase.
    String.prototype.lastUpperCase = function(){
        return this.split(``).reduce((t,d,ind) => {
            const letter = (ind === this.length - 1) ? d.toUpperCase() : d;
            t.push(letter);
            return t;
        },[]).join(``);
    }
    //////////Variable letters of string are made uppercase, starting from end.
    String.prototype.varUpperCaseEnd = function(v){
        return this.split(``).reduce((t,d,ind) => {
            const letter = (ind >= this.length - v) ? d.toUpperCase() : d;
            t.push(letter);
            return t;
        },[]).join(``);
    }
    //////////First letter of string is made uppercase.
    String.prototype.firstUpperCase = function(){
        return this.split(``).reduce((t,d,ind) => {
            const letter = (ind === 0) ? d.toUpperCase() : d;
            t.push(letter);
            return t;
        },[]).join(``);
    }
    //////////Variable letters of string are made uppercase, starting from beginning.
    String.prototype.varUpperCaseStart = function(v){
        return this.split(``).reduce((t,d,ind) => {
            const letter = (ind < v) ? d.toUpperCase() : d;
            t.push(letter);
            return t;
        },[]).join(``);
    }
    //////////Randomly sorting the string.
    String.prototype.randomize = function(){
        return this.split(``).sort(() => {
            const rN = Math.random();
            if (rN >= .67) {
                return -1;
            } else if (rN <= 33) {
                return 1;
            } else {
                return 0;
            }
        }).join(``);
    }
    //////////Determine number of instances for user input.
    String.prototype.instances = function(v){
        return this.split(``).reduce((t,d) => {
            (d === v) ? t++ : t;
            return t;
        }, 0);
    }
    //////////Determine number of instances for user input, excluding blank spaces.
    String.prototype.instancesStrict = function(v){
        return this.split(``).reduce((t,d) => {
            (d === v && d !== ` `) ? t++ : t;
            return t;
        }, 0);
    }
    //////////Determine number of instances that are not the user input.
    String.prototype.instancesNot = function(v){
        return this.split(``).reduce((t,d) => {
            (d !== v) ? t++ : t;
            return t;
        }, 0);
    }
    //////////Determine number of instances that are not the user input, excluding blank spaces.
    String.prototype.instancesNotStrict = function(v){
        return this.split(``).reduce((t,d) => {
            (d !== v && d !== ` `) ? t++ : t;
            return t;
        }, 0);
    }
    //////////Determine number of characters in string.
    String.prototype.totalCharacters = function(){
        return this.split(``).reduce((t) => {
            t++;
            return t;
        }, 0);
    }
    //////////Determine number of characters in string, excluding blank spaces.
    String.prototype.totalCharactersStrict = function(){
        return this.split(``).reduce((t,d) => {
            (d !== ` `) ? t++ : t;
            return t;
        }, 0);
    }
    //////////Determine number of English characters in string.
    String.prototype.totalCharactersEnglish = function(){
        return this.split(``).reduce((t,d) => {
            const eng = d.toLowerCase();
            (eng.charCodeAt(0) >= 97 && eng.charCodeAt(0) <= 122) ? t++ : t;
            return t;
        }, 0);
    }
    //////////Determine number of non-English characters in string.
    String.prototype.totalCharactersNonEnglish = function(){
        return this.split(``).reduce((t,d) => {
            const eng = d.toLowerCase();
            (eng.charCodeAt(0) <= 97 || eng.charCodeAt(0) >= 122) ? t++ : t;
            return t;
        }, 0);
    }
    //////////Add a number (via user input) to all characters that can convert to numbers.
    String.prototype.addToNumbers = function(v){
        return this.split(``).reduce((t,d) => {
            if (Number(d)) {
                let temp = parseInt(d);
                temp += v;
                t.push(temp);
            } else {
                t.push(d);
            }
            return t;
        }, []).join(``);
    }
    //////////Subtract a number (via user input) to all characters that can convert to numbers.
    String.prototype.subToNumbers = function(v){
        return this.split(``).reduce((t,d) => {
            if (Number(d)) {
                let temp = parseInt(d);
                temp -= v;
                t.push(temp);
            } else {
                t.push(d);
            }
            return t;
        }, []).join(``);
    }
    //////////Randomly turn letters to uppercase or lowercase 
    String.prototype.randomizedUpperLower = function(v){
        return this.split(``).reduce((t,d) => {
            const rN = Math.random();
            let temp;
            (rN <= .5) ? temp = d.toLowerCase() : temp = d.toUpperCase();
            t.push(temp);
            return t;
        }, []).join(``);
    }
    //////////Testing.
    const f = document.querySelector(`#frame`);
    f.innerText = `Hello, World!`.randomizedUpperLower();
}
main();