# swagger-edit
Swagger-Editor for local files like VIM.

[![dockeri.co](http://dockeri.co/image/zixia/swagger-edit)](https://hub.docker.com/r/zixia/swagger-edit/)


## The Problem

The [Swagger Editor](http://swagger.io/swagger-editor/) is great. 

However, It only open online URL. It can not open your local file directly, which is what I want to do.

How can we edit our swagger specification yaml file just like use a **VIM**?

```shell
$ swagger-edit my-api.yaml
```

That will be cool, also very convienence.

## The Solution

Use [Swagger-Edit](http://hub.docker.com/r/zixia/swagger-edit) docker image!

To edit your my-api.yaml, just run:

```shell
$ docker run -ti --rm --volume=\"$(pwd)\":/swagger -p 8080:8080 zixia/swagger-edit my-api.yaml
```

Then open your browser and goto the URL: <http://127.0.0.1:8080/>, that's it.

Hope you like it!

## Tips

For more convenience, we can setup a function as a command:

```shell
$ function swagger-edit() {
  docker run -ti --rm --volume=\"$(pwd)\":/swagger -p 8080:8080 zixia/swagger-edit "$@"
}
```

Author
-----------------
Zhuohuan LI <zixia@zixia.net> (http://linkedin.com/in/zixia)

<a href="http://stackoverflow.com/users/1123955/zixia">
<img src="http://stackoverflow.com/users/flair/1123955.png" width="208" height="58" alt="profile for zixia at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for zixia at Stack Overflow, Q&amp;A for professional and enthusiast programmers">
</a>

Copyright & License
-------------------
* Code & Documentation 2015© zixia
* Code released under the Apache 2.0 license
* Docs released under Creative Commons
