document.getElementById('detailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var expenseAmount = document.getElementById('amount').value;
    var expenseDescription = document.getElementById('description').value;
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('quantity').value;
  
    var myList = document.getElementById('myList');
    let myObj = {
      amount: expenseAmount,
      description: expenseDescription,
      price: price,
      quantity: quantity
    };
  
    // Store the data in localStorage
    var records = JSON.parse(localStorage.getItem('myRecords')) || [];
    records.push(myObj);
    localStorage.setItem('myRecords', JSON.stringify(records));
  
    // Create a new list item to display the user-entered data
    var newLi = document.createElement('li');
    newLi.setAttribute('class', 'item');
    newLi.textContent = 'Candy Name : ' + expenseAmount + ', Description : ' + expenseDescription + ', Price : ' + price + ', Quantity : ' + quantity;
  
    // Create the buttons
    var button1 = document.createElement('button');
    button1.textContent = 'Buy 1';
    var button2 = document.createElement('button');
    button2.textContent = 'Buy 2';
    var button3 = document.createElement('button');
    button3.textContent = 'Buy 3';

    // Add event listeners to the buttons
    button1.addEventListener('click', function() {
      // Perform the action for buying 1
      // You can update the record in the CRUDcrud database here if needed
      var remQuantity = quantity - 1
      newLi.textContent = 'Candy Name : ' + expenseAmount + ' Description : ' + expenseDescription + ' Price :' + price + ' Quantity :' + remQuantity;
      var button1 = document.createElement('button');
      button1.textContent = 'Buy 1';
      var button2 = document.createElement('button');
      button2.textContent = 'Buy 2';
      var button3 = document.createElement('button');
      button3.textContent = 'Buy 3';
      newLi.appendChild(button1);
      newLi.appendChild(button2);
      newLi.appendChild(button3);
    });
  
    button2.addEventListener('click', function() {
      // Perform the action for buying 2
      // You can update the record in the CRUDcrud database here if needed
      var remQuantity = quantity - 2
      
      newLi.textContent = 'Candy Name : ' + expenseAmount + ' Description : ' + expenseDescription + ' Price :' + price + ' Quantity :' + remQuantity;
      button1.textContent = 'Buy 1';
          var button2 = document.createElement('button');
          button2.textContent = 'Buy 2';
          var button3 = document.createElement('button');
          button3.textContent = 'Buy 3';
          newLi.appendChild(button1);
          newLi.appendChild(button2);
          newLi.appendChild(button3);
    });
  
    button3.addEventListener('click', function() {
      // Perform the action for buying 3
      // You can update the record in the CRUDcrud database here if needed
    
      var remQuantity = quantity - 3
    
      newLi.textContent = 'Candy Name : ' + expenseAmount + ' Description : ' + expenseDescription + ' Price :' + price + ' Quantity :' + remQuantity;
      button1.textContent = 'Buy 1';
          var button2 = document.createElement('button');
          button2.textContent = 'Buy 2';
          var button3 = document.createElement('button');
          button3.textContent = 'Buy 3';
          newLi.appendChild(button1);
          newLi.appendChild(button2);
          newLi.appendChild(button3);
    
    });

    // Append the buttons to the list item
    newLi.appendChild(button1);
    newLi.appendChild(button2);
    newLi.appendChild(button3);
  
    // Append the list item to the unordered list
    myList.appendChild(newLi);
  });
  
  // Retrieve and display the stored data on page load
  window.addEventListener('load', function() {
    var records = JSON.parse(localStorage.getItem('myRecords')) || [];
  
    var myList = document.getElementById('myList');
  
    records.forEach(function(record) {
      var newLi = document.createElement('li');
      newLi.setAttribute('class', 'item');
      newLi.textContent = 'Candy Name : ' + record.amount + ', Description : ' + record.description + ', Price : ' + record.price + ', Quantity : ' + record.quantity;
  
      // Create the buttons
      var button1 = document.createElement('button');
      button1.textContent = 'Buy 1';
      var button2 = document.createElement('button');
      button2.textContent = 'Buy 2';
      var button3 = document.createElement('button');
      button3.textContent = 'Buy 3';
      while(quantity>0){
      // Add event listeners to the buttons
      button1.addEventListener('click', function() {
        // Perform the action for buying 1
        // You can update the record in the CRUDcrud database here if needed
        
        var remQuantity = quantity - 1
            newLi.textContent = 'Candy Name : ' + expenseAmount + ' Description : ' + expenseDescription + ' Price :' + price + ' Quantity :' + remQuantity;
            var button1 = document.createElement('button');
            button1.textContent = 'Buy 1';
            var button2 = document.createElement('button');
            button2.textContent = 'Buy 2';
            var button3 = document.createElement('button');
            button3.textContent = 'Buy 3';
            newLi.appendChild(button1);
            newLi.appendChild(button2);
            newLi.appendChild(button3);
      });
  
      button2.addEventListener('click', function() {
        // Perform the action for buying 2
        // You can update the record in the CRUDcrud database here if needed
        var remQuantity = remQuantity - 2
        remQuantity = quantity
        newLi.textContent = 'Candy Name : ' + expenseAmount + ' Description : ' + expenseDescription + ' Price :' + price + ' Quantity :' + remQuantity;
        button1.textContent = 'Buy 1';
            var button2 = document.createElement('button');
            button2.textContent = 'Buy 2';
            var button3 = document.createElement('button');
            button3.textContent = 'Buy 3';
            newLi.appendChild(button1);
            newLi.appendChild(button2);
            newLi.appendChild(button3);
      });
  
      button3.addEventListener('click', function() {
        // Perform the action for buying 3
        // You can update the record in the CRUDcrud database here if needed
        var remQuantity = remQuantity - 3
        newLi.textContent = 'Candy Name : ' + expenseAmount + ' Description : ' + expenseDescription + ' Price :' + price + ' Quantity :' + remQuantity;
        button1.textContent = 'Buy 1';
            var button2 = document.createElement('button');
            button2.textContent = 'Buy 2';
            var button3 = document.createElement('button');
            button3.textContent = 'Buy 3';
            newLi.appendChild(button1);
            newLi.appendChild(button2);
            newLi.appendChild(button3);
      });
    }
      // Append the buttons to the list item
      newLi.appendChild(button1);
      newLi.appendChild(button2);
      newLi.appendChild(button3);
  
      // Append the list item to the unordered list
      myList.appendChild(newLi);
    });
  });
  