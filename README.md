# http-by-hand
Exploring the http protocol with interactive tools

# usage
```bash
$ ./server.js
```

##### telnet, netcat and nodeJS

```bash
$ [telnet | nc | ./tcp-client.js] localhost 8989
GET / HTTP/1.1
#Host: localhost
# Connection: close
<return>

<content length>
hi
0 # end char

POST / HTTP/1.1
#Host: localhost
#Content-Type: application/x-www-form-urlencoded
Content-Length: 19

foo=bar&true=false
```

##### curl
```bash
$ curl -K-
url localhost:8989
-d foo=bar
# ctrl-D
you sent me: foo=bar
```

# todos
- [x] node tcp interactive
