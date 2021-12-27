//const { createClient } = supabase
//var client = createClient("https://c70n6jf2pma31c7rlgfg.baseapi.memfiredb.com", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzE3Nzk4NzkzNSwiaWF0IjoxNjQwMDY3OTM1LCJpc3MiOiJzdXBhYmFzZSJ9.RUECPsvnhhu8lBNDgBe1b6RB6HGd8MHX_J7tYAgI6TI")

window.members = [
  {
    "id": 1,
    "name": "甲"
  },
  {
    "id": 2,
    "name": "乙"
  },
  {
    "id": 3,
    "name": "丙"
  },
  {
    "id": 4,
    "name": "丁"
  },
  {
    "id": 5,
    "name": "戊"
  },
  {
    "id": 6,
    "name": "己"
  },
  {
    "id": 7,
    "name": "庚"
  },
  {
    "id": 8,
    "name": "辛"
  },
  {
    "id": 9,
    "name": "壬"
  },
  {
    "id": 10,
    "name": "葵"
  }
]

const getMembers = async() => {
    let { error, data } =  await window.client.from('choujiang').select();
    console.log("data", data);
    window.members = data;
    return data
}

getMembers();
console.log("members", window.members)
