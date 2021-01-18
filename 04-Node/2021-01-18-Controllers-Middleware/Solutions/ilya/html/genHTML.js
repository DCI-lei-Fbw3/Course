
module.exports = function(page, global){
    switch(page){
        case 'landing': 
            return `
                <!DOCTYPE html>
                <html lang="en">
                
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bank</title>
                <!-- bootstrap -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
                </head>
                
                <body>
                    
                <div class="container-fluid d-flex flex-column flex-wrap mt-5">
                
                    <div id="log-in-wrapper" class="w-25 mx-auto mb-5">
                
                    <form id="log-in-form" action="/login" method="POST">
                        <div class="mb-3">
                        <label for="iban" class="form-label">IBAN</label>
                        <input type="text" class="form-control" id="iban" name="iban" aria-describedby="iban">
                        </div>
                        <div class="mb-3">
                        <label for="pin" class="form-label">PIN</label>
                        <input type="password" class="form-control" id="pin" name="pin">
                        </div>
                        <button type="submit" class="btn btn-primary">Log In</button>
                    </form>
                
                    </div>
                
                </div>
                
                </body>
                
                </html>
                `;
        case 'loggedIn': 
            return `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Bank</title>
              <!-- bootstrap -->
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
            </head>
            
            <body>
            
            
              <input id="token" class="form-control w-50 m-3 mx-auto text-center" type="text" placeholder="${global.token}"
                disabled readonly>
            
              <div class="container-fluid d-flex flex-column flex-wrap">
                  
                <div class="d-flex justify-content-around">
            
                  <form id="transfer-form" class="w-25 m-3" action="/transfer" method="POST">
                    <div class="mb-3">
                      <label for="transfer" class="form-label">Amount in €</label>
                      <input type="text" class="form-control" id="transfer" name="transfer" aria-describedby="transfer">
                    </div>
                    <button type="submit" class="btn btn-primary">Transfer</button>
                  </form>
            
                  <form id="balance-form" class="w-25 m-3" action="/${global.action}" method="POST">
                    <div class="mb-3">
                      <label for="balance" class="form-label">Balance in €</label>
                      <input id="balance" class="form-control" type="text"${global.balanceInput} disabled
                        readonly>
                    </div>
                    <button id="balance-btn" type="submit" class="btn btn-primary">${global.balanceButton}</button>
                  </form>
            
                </div>
            
              </div>
            
            </body>
            
            </html>
            `;
        case 'invalidTransfer': 
            return `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Bank</title>
              <!-- bootstrap -->
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
            </head>
            
            <body>

            <script>
                alert("You do not have an overdraft of current balance ${global.balance} + transfer amount ${global.transfer} = ${global.balance + global.transfer}!");
            </script>
            
            
              <input id="token" class="form-control w-50 m-3 mx-auto text-center" type="text" placeholder="${global.token}"
                disabled readonly>
            
              <div class="container-fluid d-flex flex-column flex-wrap">
                  
                <div class="d-flex justify-content-around">
            
                  <form id="transfer-form" class="w-25 m-3" action="/transfer" method="POST">
                    <div class="mb-3">
                      <label for="transfer" class="form-label">Amount in €</label>
                      <input type="text" class="form-control" id="transfer" name="transfer" aria-describedby="transfer">
                    </div>
                    <button type="submit" class="btn btn-primary">Transfer</button>
                  </form>
            
                  <form id="balance-form" class="w-25 m-3" action="/${global.action}" method="POST">
                    <div class="mb-3">
                      <label for="balance" class="form-label">Balance in €</label>
                      <input id="balance" class="form-control" type="text"${global.balanceInput} disabled
                        readonly>
                    </div>
                    <button id="balance-btn" type="submit" class="btn btn-primary">${global.balanceButton}</button>
                  </form>
            
                </div>
            
              </div>
            
            </body>
            
            </html>
            `;
        case 'invalidLogIn': 
            return `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bank</title>
            <!-- bootstrap -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
            </head>
            
            <body>
                
                <script>
                    alert('Invalid Log In Details');
                </script>

            <div class="container-fluid d-flex flex-column flex-wrap mt-5">
            
                <div id="log-in-wrapper" class="w-25 mx-auto mb-5">
            
                <form id="log-in-form" action="/login" method="POST">
                    <div class="mb-3">
                    <label for="iban" class="form-label">IBAN</label>
                    <input type="text" class="form-control" id="iban" name="iban" aria-describedby="iban">
                    </div>
                    <div class="mb-3">
                    <label for="pin" class="form-label">PIN</label>
                    <input type="password" class="form-control" id="pin" name="pin">
                    </div>
                    <button type="submit" class="btn btn-primary">Log In</button>
                </form>
            
                </div>
            
            </div>
            
            </body>
            
            </html>
            `;
        default: 
            return `ERROR`;
    }
};