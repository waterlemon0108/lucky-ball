const addAward = async (name, awards, current) => {
    const { data, error } = await window.client
    .from('awards')
    .insert([
      {uuid: window.guid,
       award:awards[current].award,
       user: name,
       name: awards[current].name,
       create_time: new Date(Date.now()+(1000*60*(-(new Date()).getTimezoneOffset()))).toISOString().replace('T',' ').replace('Z','')
      }
    ])
}

const resetAwards = async (awards, current)  => {
  const { data, error } = await window.client
    .from('awards')
    .update({reset:1})
    .eq("award", awards[current].award)
    .eq("name", awards[current].name)
    .eq("uuid", window.guid);
  if (error) {
    console.error(error);
  }
}

function guid() {
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  window.guid = uuid;
  localStorage.setItem('guid', uuid);
  return uuid;
}

