# VirtualBox Manage

## VBoxManage.exe

Located in C:\Program Files\Oracle\VirtualBox

## Resize a vmdk virtual drive (On Windows)

```
> $ VBoxManage.exe clonehd "/path/to/vmdk/virtualdisk.vmdk" "/path/to/new/vdi/virtualdisk.vdi" --format vdi

> $ VBoxManage.exe modifyhd "/path/to/new/vdi/virtualdisk.vdi" --resize 100000
```
