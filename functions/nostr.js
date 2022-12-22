

export function onRequest(context) {
  //$.getJSON("/nostr.json", function(val) {
let val = {
  "names": {
    "basruel": "08da8aabac2a2e031131d0ba626b18c9a8cb98d5d2ebbcbdc62efb48e9efbddd"
  }
};
    const json = JSON.stringify(val);
    return new new Response(json, {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      }
    });
  });

}
