const connection = require('../database/conn');

const Product = {};

// Function to get all products grouped by categories
Product.getAllProduct = (callback) => {
  const sql = `
    SELECT 
      categories.id AS category_id,
      categories.name AS category_name,
      products.id AS product_id,
      products.product_name,
      products.cat_id,
      products.description,
      products.price,
      products.image
    FROM 
      categories
    LEFT JOIN 
      products 
    ON 
      categories.id = products.cat_id
    ORDER BY 
      categories.id, products.id;
  `;

  connection.query(sql, (error, results) => {
    if (error) {
      return callback(error, null);
    }

    // Transform results into a structured format
    const structuredData = {};
    results.forEach((row) => {
      if (!structuredData[row.category_id]) {
        structuredData[row.category_id] = {
          category_name: row.category_name,
          items: [],
        };
      }
      if (row.product_id) {
        structuredData[row.category_id].items.push({
          id: row.product_id,
          name: row.product_name,
          description: row.description,
          price: row.price,
          image: row.image,
        });
      }
    });

    callback(null, structuredData);
  });
};

Product.getSelectedItems = (selectedItems, callback) => {
  const itemIds = selectedItems.map(item => item.id);
  
  // SQL query to get the selected products' details
  const sql = `
    SELECT 
      products.id AS product_id,
      products.product_name,
      products.description,
      products.price,
      products.image
    FROM 
      products JOIN categories ON categories.id = products.cat_id
    WHERE 
      products.id IN (${itemIds.join(', ')});
  `;

  connection.query(sql, (error, results) => {
    if (error) {
      return callback(error, null);
    }

    // Combine the results with quantity
    const detailedItems = results.map((product) => {
      const selectedItem = selectedItems.find(item => item.itemId === product.product_id);
      return {
        id: product.product_id,
        name: product.product_name,
        description: product.description,
        price: product.price,
        image: product.image,
        quantity: selectedItem ? selectedItem.quantity : 0,
      };
    });

    callback(null, detailedItems);
  });
};

module.exports = Product;