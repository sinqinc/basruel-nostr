

export function onRequest(context) {
  $.getJSON("/nostr.json", function(val) {
    const json = JSON.stringify(val);
    return new new Response(json, {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    });
  });

}
