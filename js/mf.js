var url = ""
var secret = ""
const { createClient } = supabase

const getClient = function () {
  var client = createClient(url, secret);

  return createClient(url, secret)
}

window.client = getClient();
