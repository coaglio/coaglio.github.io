#!/usr/bin/env bash

while IFS= read -r url; do
    echo "[+] DOWNLOADING: $url"
    wget "$url"
done < urls.txt
