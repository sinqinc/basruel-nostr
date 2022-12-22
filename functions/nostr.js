

export function onRequest(context) {
  $.getJSON("/nostr.json", function(json) {
    return new new Response(json, {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    });
  });

}
