#Filip Radojkovic solution

First time doing something that has React on front. The time to get the end result was 40 minutes (ofcourse before that was about 2 hours watching tutorials on egghead and youtube). The first question was should I implement the flux architecture, which would lead to refactoring this small project. I send y

##Task 1 
For this task I have created Pagination component. Input data for this component was the data from API (pagination object), and two functions from App component that change the page loaded from API.

##Task 2
Just attached the right props to PriceHighlight

##Bonus task
As I could see there are two types of images. 
* just products on the white backgorund (set smaller width for .collectionBox-coverImage, like 65% and margin: auto)
* full image, without white backgorund (in this case we want full width images)

>Since there are lot more products with white backgorund .collectionBox-coverImage was changed, width: 65%; margin: auto;

Also we dont have any flag for the product images (at least I did not find any in your API response)
The ideal solution will be to mark all of this product with the image type. Then the frontend will know which class to add to the backgroundImage in Collection component. 
Also there is a thing that marking 5520 (number of products I got now without the q param in url API call, and the number of product is rising) products by hand can be pretty big job. Maybe the answer will be to writte some script that will get all the images from API (object that contains url and image id). One by one, using canvas, detect if all the 4 corners of the image are white. In that case we would know the image type, with or without white backgorund. That script will aslo generate the database script, every line will be one update statement that will update the image withe the image type. 

Example if we use mysql:

update image_table set id_image_type = ? where id = ?;    
update image_table set id_image_type = ? where id = ?;    
update image_table set id_image_type = ? where id = ?;    
update image_table set id_image_type = ? where id = ?;
...

This is just an simple example, I think that you get my point.

