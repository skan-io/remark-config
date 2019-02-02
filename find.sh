if [ -f $PWD/write.js ]; then
    echo "$PWD/write.js File found!"
    node $PWD/write.js
else
    echo "$PWD/write.js File not found"
fi
