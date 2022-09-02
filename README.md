### H3 MART ASSIGNMENT

[DEMO](https://h3-mart-assignment.herokuapp.com/)

In the product_list.xl file there are two columns one is product name and another is price column which is empty.
Create a REST API where we upload this product file and in the response you have to return the same excel file with product price.
For price i have to call an API to get product price for that product_id.
End point : https://api.storerestapi.com/products/<product_id>

##### XL file link :

https://docs.google.com/spreadsheets/d/1l9H4iLz3IzuPQYCosvMujI9PPikHcHF4/edit?usp=sharing&ouid=107189063940590451802&rtpof=true&sd=true

#### Insert price in XLSX (`PSOT` ./xlsx )

##### request body

In the request body, you need to add a `.xlsx` file with a key name `file`.

##### response body

###### SUCCESS

- File ready for download 👍.

###### FAILED

```json
{
  "status": false,
  "message": "..."
}
```
