import cohere from "https://esm.sh/cohere-ai@4.3.0";
cohere.init('u5Exv5CWdoNVUiDLaSbd0NihQrXHfOcsue9QC9bg');

(async () => {
  const categories = ['Nature','Adventure','Technology','Food','Language','Art','Love','Hate']
  const input = 'Phrase: emtional things reflection and inflection of raindrops';
  const output = '\nCategory:';
  const memory =  'Phrase: Simplistic from afar, but deeply rooted in meaningful and intricate connections\nCategory: Nature\n--\nPhrase: Unknown destination alongside complete strangers focused on accomplishing their own goals\nCategory: Adventure\n--\nPhrase: New knowledge built upon infinite opportunities promoting growth and change\nCategory: Technology\n--\nPhrase: Wonderous experiences, unique to different cultures around the world, all at the tip of your taste buds\nCategory: Food\n--\nPhrase: Uncountable, repetitive calculations with no free will but an understanding to do exactly as it is told\nCategory: Technology\n--\nPhrase: Communication barriers overcome by inexplicable laws\nCategory: Language\n--\nPhrase: Continuous clicking with no end in sight\nCategory: Art\n--\nPhrase: Compulsive actions for one other without thinking of the consequences\nCategory: Love\n--\nPhrase: Unrelenting anger towards another without hope of being resolved\nCategory: Hate\n--\nPhrase: Silent and motionless yet gleeful in the company of another\nCategory: Love\n--\nPhrase: Devoted to one another without much conversation or consideration of the world around them\nCategory: Love\n--\nPhrase: Repulsive actions towards someone else\nCategory: Hate\n--\nPhrase: Activities and gatherings for close people\nCategory: Adventure\n--\nPhrase: Joyous running, jumping, thinking, and talking\nCategory: Adventure\n--\nPhrase: Tied by blood, dependable forever\nCategory: Love\n--\nPhrase: Appearing trustworthy with hidden intentions\nCategory: Hate\n--\nPhrase: Transparent entrance to a small world of personal design and creativity\nCategory: Art\n--\n';

  const response = await cohere.generate({
    model: 'large',
    prompt: memory + input + output,
    max_tokens: 100,
    temperature: 0.8,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: 'NONE'
    });
    console.log(input)
    if (categories.includes(response.body.generations[0].text.substring(1,response.body.generations[0].text.length-3))) {
        console.log(`Category:${response.body.generations[0].text}`);
    }
    else
    {
        console.log(`Category: Miscellaneous\n--`)
    }
  })();


phrases = [memory.split("\n")]
console.log(phrases);
const cat = "nature";



async function postData(cat, data = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit               
  }) {
      const url = `http://127.0.0.1:8000/setValue/${cat}`

        
    }

    postData("cat");

    async function getData(cat, data = {
      url:`http://127.0.0.1:8000/getValue/${cat}`,
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit          
    }.then((data) => {
      console.log(data)
    }))