// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Gamsssss', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'y018', // desired subdomain name
  owner: {
    repo: '<https://replit.com/@Oscar-LL/Html-test>',
    email: '<y018@gmail.com>',
  },
  record: {
    CNAME: '<oscar-ll.repl.co>', // e.g.: <your-github-account>.github.io
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
