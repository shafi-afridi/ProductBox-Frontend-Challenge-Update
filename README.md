# ProductBox-Frontend-Challenge-Update
Everything else is the same Just created two components in the client directory additem and view item. The Links to these components are in the Home page. You can add item through proxy from node post api to the init_json file in server directory and also can view items.

To run the both server and client go to the server directory and hit the command `npm run dev` to start both server and client concurrently.

[Server] localhost:3001 [Client] localhost:3000

I have fixed an issue with your backend api in the items route. [router.get request] when post an item it also add a null element in the JSON file which leads to frontend crash because name, price or image of null can't be rendred. So I have filter the null values from items before it is respond . The issue was fixed

Thanks
