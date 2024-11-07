
 echo "building the application..."
 npm run build

 echo "uploading to the server..."
 scp -r dist/* onekonek@13.211.183.92:/var/www/13.211.183.92

 echo "upload completed!"