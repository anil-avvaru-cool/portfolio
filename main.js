class MyScript extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        `
    }
}

customElements.define('my-script',MyScript);

class MyNavBar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Certifications</a>
              </li>             
              <li class="nav-item">
                <a class="nav-link" href="#">Testimonial</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`
    }
}

customElements.define('my-nav-bar',MyNavBar);

class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Freelance software engineering</title>
    <link href="css/main.css" rel="stylesheet">
</head>`
    }
}

customElements.define('my-header',MyHeader);

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="fixed-bottom">       
  <p class="text-center">  
  &copy; All Rights Reserved Anil Kumar Avvaru, Hand crafted website using bootstrap from scratch.</p>  
</footer>`
    }
}

customElements.define('my-footer',MyFooter);

