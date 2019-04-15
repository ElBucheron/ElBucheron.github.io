# Share files over the local network

## On the destination machine:

```
$ nc -l 7000 | pv | tar -xpf -
```

## On the source machine:

```
$ tar -cf - FILES_TO_SEND | pv | nc DEST_IP 7000
```
