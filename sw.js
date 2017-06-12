self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('emp-dir').then(function(cache) {
      return cache.addAll([
          ".",
          "/progress-web-app",
          "index.html",
          "directory.html",
          "detail-overlay.html",
          "employee.html",
          "fetch.js",
          "android-chrome-36x36.png",
          "android-chrome-48x48.png",
          "android-chrome-72x72.png",
          "android-chrome-96x96.png",
          "android-chrome-144x144.png",
          "android-chrome-192x192.png",
          "android-chrome-256x256.png",
          "android-chrome-384x384.png",
          "android-chrome-512x512.png",
        ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      return cachedResponse || fetch(event.request).catch(() => new Response(JSON.stringify(mock), { headers: { "Content-Type": "application/json" } } ) );
    })
  );
});

const mock = {
  results: [
    {
      gender: "male",
      name: {
        title: "mr",
        first: "gabe",
        last: "hart"
      },
      location: {
        street: "9420 saddle dr",
        city: "temecula",
        state: "north carolina",
        postcode: 82270
      },
      email: "gabe.hart@example.com",
      login: {
        username: "smallfrog357",
        password: "pistol",
        salt: "2Wm8vpG8",
        md5: "b675a706105ac06536f15e7a24ea51eb",
        sha1: "ba816c7769a131822141c7c6fc8dd772ca18e9cf",
        sha256: "f07e5a8ff85ed8e9cbcd761410fea968d8cd677931361515541439dd11a2d152"
      },
      dob: "1976-04-10 23:20:52",
      registered: "2014-07-03 02:05:09",
      phone: "(967)-351-1604",
      cell: "(189)-422-4148",
      id: {
        name: "SSN",
        value: "305-62-6373"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/62.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/62.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/62.jpg"
      },
      nat: "US"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "eric",
        last: "meyer"
      },
      location: {
        street: "8602 w sherman dr",
        city: "lakeland",
        state: "new mexico",
        postcode: 27166
      },
      email: "eric.meyer@example.com",
      login: {
        username: "organicrabbit506",
        password: "marcia",
        salt: "jP2Ja2nd",
        md5: "3c65d354c21bb2e7138fe321b335cd6b",
        sha1: "0b2b8ade3aa34ce8fac33da0b9df786eb9b5f498",
        sha256: "62d055252a160baf99ff0a557d8876db10d880c60a12a26f0a94bcc7e9bce219"
      },
      dob: "1944-09-16 14:53:23",
      registered: "2003-10-15 13:29:40",
      phone: "(261)-910-6411",
      cell: "(070)-169-5185",
      id: {
        name: "SSN",
        value: "112-55-6356"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/14.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg"
      },
      nat: "US"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "kent",
        last: "mckinney"
      },
      location: {
        street: "8456 forest ln",
        city: "flint",
        state: "utah",
        postcode: 78918
      },
      email: "kent.mckinney@example.com",
      login: {
        username: "silverrabbit713",
        password: "12344321",
        salt: "xHABkRoS",
        md5: "a973056229007426c2a79f974691ae4d",
        sha1: "a6c7bacaddfe3a3d263be966a3c6140c84573464",
        sha256: "fe493ea6e251a17954eead14f8293a815eac8144c8830a842535f6388f44259c"
      },
      dob: "1993-02-11 09:01:22",
      registered: "2002-06-14 14:25:34",
      phone: "(498)-486-1726",
      cell: "(881)-516-8555",
      id: {
        name: "SSN",
        value: "139-85-9268"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/53.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg"
      },
      nat: "US"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "aaron",
        last: "fisher"
      },
      location: {
        street: "6424 w campbell ave",
        city: "gainesville",
        state: "oregon",
        postcode: 31482
      },
      email: "aaron.fisher@example.com",
      login: {
        username: "lazybird254",
        password: "gobucks",
        salt: "sEEcDTuz",
        md5: "ef36ad56815f4aa4b5c032f7cb65b204",
        sha1: "48712b91ba3ecf9c84c29d93e995318c0eaba17e",
        sha256: "25250421d6b8f86c7fc943966d33e19f71d46aeae47092f8cef446a518dd18f3"
      },
      dob: "1984-05-08 22:57:32",
      registered: "2003-06-27 13:09:49",
      phone: "(383)-663-8589",
      cell: "(071)-239-5433",
      id: {
        name: "SSN",
        value: "208-34-1391"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/45.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg"
      },
      nat: "US"
    },
    {
      gender: "female",
      name: {
        title: "miss",
        first: "erica",
        last: "boyd"
      },
      location: {
        street: "7008 oak ridge ln",
        city: "fountain valley",
        state: "new hampshire",
        postcode: 43964
      },
      email: "erica.boyd@example.com",
      login: {
        username: "goldenmouse159",
        password: "redone",
        salt: "kokHxw3P",
        md5: "d2f312b92041d0de68ba0e82c082ff9c",
        sha1: "a969d26a5b51ab753da3253f3e64bf2711eddad8",
        sha256: "e9e1b3636ed5028f5155cd295814668d3f761082f8205ca6cc8fe4ac7ebbcfd5"
      },
      dob: "1961-08-04 16:38:01",
      registered: "2016-06-11 12:39:22",
      phone: "(405)-545-0360",
      cell: "(108)-144-9872",
      id: {
        name: "SSN",
        value: "729-29-8265"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/32.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg"
      },
      nat: "US"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "martin",
        last: "meyer"
      },
      location: {
        street: "5422 e sandy lake rd",
        city: "oceanside",
        state: "idaho",
        postcode: 49815
      },
      email: "martin.meyer@example.com",
      login: {
        username: "brownbird581",
        password: "wwwwww",
        salt: "BeF2Txq0",
        md5: "17caade393f0e87b88e8359caae17669",
        sha1: "fe131c58f84c07a9489e7e85539f36518d1f345f",
        sha256: "8c31321a5ddc5ab04ea08312122ba87c1557a684bdb0febe7eeed53c92278d5f"
      },
      dob: "1961-03-18 18:43:07",
      registered: "2005-06-11 05:34:35",
      phone: "(410)-074-2303",
      cell: "(944)-732-8565",
      id: {
        name: "SSN",
        value: "461-63-7632"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/64.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/64.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/64.jpg"
      },
      nat: "US"
    },
    {
      gender: "female",
      name: {
        title: "miss",
        first: "naomi",
        last: "young"
      },
      location: {
        street: "3185 avondale ave",
        city: "fort collins",
        state: "georgia",
        postcode: 25105
      },
      email: "naomi.young@example.com",
      login: {
        username: "crazymeercat939",
        password: "jumbo",
        salt: "eC3ZaBF8",
        md5: "62eaec8f30bd717f4c29d50ea99c6e8a",
        sha1: "d837d1bfc5978c51fca4e263e5c0bd04773de749",
        sha256: "53085a04da637279f721572ffc1fa2736a35eb40ed069d0fc123218788f9b620"
      },
      dob: "1977-07-06 10:26:49",
      registered: "2004-06-22 01:11:13",
      phone: "(819)-989-7073",
      cell: "(420)-043-9077",
      id: {
        name: "SSN",
        value: "079-27-8076"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/14.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg"
      },
      nat: "US"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "javier",
        last: "reed"
      },
      location: {
        street: "7033 stevens creek blvd",
        city: "chicago",
        state: "west virginia",
        postcode: 67163
      },
      email: "javier.reed@example.com",
      login: {
        username: "bigpeacock276",
        password: "gretchen",
        salt: "VryFqVKw",
        md5: "7e7077f9ebae239fc3f5dc9eb263b12e",
        sha1: "f466b91ea3d194b31807239888892c73d755aab8",
        sha256: "82e95ba0b52b63b21f2e0ccb059098f4db0a6599f9e3c42c74e73a704723cc77"
      },
      dob: "1989-01-03 17:42:42",
      registered: "2006-01-22 17:41:32",
      phone: "(110)-081-9693",
      cell: "(199)-993-4800",
      id: {
        name: "SSN",
        value: "414-14-5166"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/14.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg"
      },
      nat: "US"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "jesus",
        last: "turner"
      },
      location: {
        street: "8708 homestead rd",
        city: "desoto",
        state: "vermont",
        postcode: 64566
      },
      email: "jesus.turner@example.com",
      login: {
        username: "browndog951",
        password: "charlie",
        salt: "xjLI7Fn6",
        md5: "b6668e11b4666aae3b95301a49f14e14",
        sha1: "ad0e36f271e1cfc9f56f7c2aebf6481df5c0f35a",
        sha256: "aae605aae0c5cdcdc35d135a9f62063b6270e64b1629f9c8dbbfbcb10ec73d04"
      },
      dob: "1965-10-20 09:50:06",
      registered: "2012-07-07 09:32:09",
      phone: "(867)-725-3199",
      cell: "(806)-554-5412",
      id: {
        name: "SSN",
        value: "697-06-0160"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/47.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg"
      },
      nat: "US"
    },
    {
      gender: "female",
      name: {
        title: "mrs",
        first: "dianne",
        last: "oliver"
      },
      location: {
        street: "7804 w sherman dr",
        city: "hayward",
        state: "alabama",
        postcode: 82109
      },
      email: "dianne.oliver@example.com",
      login: {
        username: "brownladybug275",
        password: "punisher",
        salt: "mKKfeTAl",
        md5: "f1d7d1bb192fdcb485c8cacf685c9ab0",
        sha1: "91024cc8eb7e28b5539ac1806910225faeb78632",
        sha256: "5fb148eb3680596b18f43dceb95d8773a9197391a35ee06a17dcf91cda11ed95"
      },
      dob: "1960-08-16 18:42:30",
      registered: "2014-01-17 10:41:29",
      phone: "(041)-718-4151",
      cell: "(901)-166-1990",
      id: {
        name: "SSN",
        value: "751-69-7852"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/58.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/58.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/58.jpg"
      },
      nat: "US"
    },
    {
      gender: "female",
      name: {
        title: "miss",
        first: "alicia",
        last: "mendoza"
      },
      location: {
        street: "3227 crockett st",
        city: "bueblo",
        state: "massachusetts",
        postcode: 11049
      },
      email: "alicia.mendoza@example.com",
      login: {
        username: "heavyduck761",
        password: "seadog",
        salt: "yw472QC6",
        md5: "dad34ca7ac06ef9bd06e190e4adc9043",
        sha1: "7ee138b9dfc44f66e11edc4b55026eb25e457919",
        sha256: "a3fc2dcb8dbd75c125c370245802425f179e4fe7b9a7ad8cf213dfe0ab598c6f"
      },
      dob: "1993-03-14 07:35:56",
      registered: "2014-04-25 00:15:39",
      phone: "(583)-609-9186",
      cell: "(596)-867-6543",
      id: {
        name: "SSN",
        value: "876-74-5810"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/85.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg"
      },
      nat: "US"
    },
    {
      gender: "female",
      name: {
        title: "mrs",
        first: "kim",
        last: "flores"
      },
      location: {
        street: "3042 taylor st",
        city: "princeton",
        state: "michigan",
        postcode: 63907
      },
      email: "kim.flores@example.com",
      login: {
        username: "bluemouse526",
        password: "extreme",
        salt: "nm0OkqBc",
        md5: "1205369f84d7aaba2f157c7f65798d5d",
        sha1: "32573d9e4319b42cad7bccbf8074356fae4e6fae",
        sha256: "fc53cb64f12a1459223e0a7ca6f9f833917d96671b1313b80db09581dd198f88"
      },
      dob: "1990-02-02 04:08:42",
      registered: "2012-02-17 18:20:48",
      phone: "(307)-689-2684",
      cell: "(290)-307-9127",
      id: {
        name: "SSN",
        value: "248-88-0050"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/28.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg"
      },
      nat: "US"
    }
  ],
  info: {
    seed: "9842d3417ff1fb8f",
    results: 12,
    page: 1,
    version: "1.1"
  }
};




// .then((response) => {
//   //console.log(response)
//   if(response.status == 200) {
//     return response;
//   } else  {
//     return mock;
//   }
//   //return response;
//   // return caches.open('emp-dir').then((cache) => {
//   //   cache.put(event.request, response.clone());
//   //   return response;
//   // });
// })
