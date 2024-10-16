
 echo "building the application..."
 npm run build

 echo "uploading to the server..."
 scp -r dist/* git@192.168.100.23:/var/www/112.210.63.236

 echo "upload completed!"