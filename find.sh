if [ -f $PWD/write.js ]; then
    echo "File found!"
    node $PWD/write.js
else
    echo "File not found"
fi
