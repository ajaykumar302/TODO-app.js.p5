//Add items list
const addList = document.getElementById("add");//addlist btn
const popup = document.querySelector(".popup");//blank div to append popup

addList.addEventListener("click", () => {
  const card = document.createElement("div");//div to append card
  card.className = "card";

  const cardHeading = document.createElement("p");//card heading
  cardHeading.innerText = "Add New List";//innertext changed for list ,we can use it for item aslo

  const cardInput = document.createElement("input");//popup input
  cardInput.type = "text";
  cardInput.placeholder = "Enter List Name Here";
  cardInput.style.textAlign = 'center';
  cardInput.id = "name";

  const btnAdd = document.createElement("div");//for-add btn
  btnAdd.className = "button";
  btnAdd.innerText = "Add";

  const btnClose = document.createElement("div");//for-cls btn
  btnClose.className = "button";
  btnClose.innerText = "Close";

  document.querySelector(".main").classList.add("blur");
  popup.appendChild(card);//appended into blank div

  //warning - enter list name before pressing add btn
  const warning = document.createElement("p");
  warning.innerText = " Please Enter List Name!!";
  warning.style.display = "none";

  card.appendChild(cardHeading);
  card.appendChild(cardInput);
  card.appendChild(btnAdd);
  card.appendChild(btnClose);
  card.appendChild(warning);
  ///-----------------------------------------------------------close button
  btnClose.addEventListener("click", () => {
    popup.removeChild(card);
    document.querySelector(".main").classList.remove("blur");
  })

  //////----------------------------------------------------------add button
  btnAdd.addEventListener("click", () => {
    if (cardInput.value === "") {
      warning.style.fontSize = "0.7rem"
      warning.style.display = "block";
    }
    else {
      document.getElementById("introtext").style.display = "none";//no items in the list
      popup.removeChild(card);//add list pop up will dissapears
      document.querySelector(".main").classList.remove("blur");//blur will dissapear

      const card1 = document.createElement("div");//box is card
      card1.className = "cards";

      const listName = document.createElement("span");//heading
      listName.id = "title";
      listName.innerText = cardInput.value;

      const ele = document.createElement("hr");
      ele.style.color = "black";
      listName.appendChild(ele);

      

      const element = document.createElement("div");//to add 2 btns
      element.className = "buttons";
      const add = document.createElement("i");
      add.className = "fa-solid fa-circle-plus";

      const del = document.createElement("i");
      del.className = "fa-solid fa-trash-can";
      del.style.color = "red";

      const container2 = document.querySelector(".con2");
      container2.appendChild(card1);
      card1.appendChild(listName);
      card1.appendChild(element);
      // card1.appendChild(ul);
      element.appendChild(add);
      element.appendChild(del);
       ///////////new-page---------------------------
           

      //deleting the whole card---------------------------------------------------------------
      del.addEventListener("click", () => {
        document.querySelector(".con2").removeChild(card1);
        if (document.querySelector(".con2").innerText === "") {
          document.querySelector("#introtext").style.display = "block";
        }
      })

      //////// Inside card popup adding item lists---------------------------------------------------
      add.addEventListener("click", () => {
        const card = document.createElement("div");//div to append card
        card.className = "card";

        const heading = document.createElement("p");//card heading
        heading.innerText = "Add New List";//innertext changed for list ,we can use it for item aslo

        const cardInput = document.createElement("input");//popup input
        cardInput.type = "text";
        cardInput.placeholder = "Enter List Name Here";
        cardInput.style.textAlign = 'center';
        cardInput.id = "name";

        const plus = document.createElement("div");//for-add btn
        plus.className = "button";
        plus.innerText = "Add";

        const btnClose = document.createElement("div");//for-cls btn
        btnClose.className = "button";
        btnClose.innerText = "Close";

        document.querySelector(".main").classList.add("blur");
        popup.appendChild(card);//appended into blank div

        //warning - enter list name before pressing add btn
        const warning = document.createElement("p");
        warning.innerText = " Please Enter List Name!!";
        warning.style.display = "none";

        card.appendChild(heading);
        card.appendChild(cardInput);
        card.appendChild(plus);
        card.appendChild(btnClose);
        card.appendChild(warning);

        ///-----------------------------------------------------------close button
        btnClose.addEventListener("click", () => {
          popup.removeChild(card);
          document.querySelector(".main").classList.remove("blur");
        })

        //////// Inside card  adding item lists---------------------------------------------------add button
        plus.addEventListener("click", () => {
          if (cardInput.value === "") {
            warning.style.fontSize = "0.7rem"
            warning.style.display = "block";
          }
          else {
            popup.removeChild(card);//add list pop up will dissapears
            document.querySelector(".main").classList.remove("blur");//blur will dissapear

            // let input = document.getElementById('name').value;
            const ul = document.createElement("ul");
            ul.style.listStyleType = "none";
            ul.className = "ul";

            let li = document.createElement('li');
            let btn1 = document.createElement('button');

            btn1.innerText = "Mark done";
            btn1.style.margin = "5px";
            btn1.style.backgroundColor = "skyblue";
            btn1.style.borderRadius = "25px";
            btn1.style.border = "2px solid transparent";

            li.innerText = cardInput.value;
            // let ul = document.querySelector('ul');
            card1.appendChild(ul);
            ul.appendChild(li);
            li.appendChild(btn1);

            btn1.addEventListener('click',
              function () {
                li.style.textDecoration = "line-through";
                li.style.color = "black";
                li.removeChild(btn1);
              })
          }
        })
      })
      ///----------------------------------------------



      // /////creating new page--------------------------------------------------------------

      listName.addEventListener("click", () => {

        const wholeCard = document.querySelector(".main");
        wholeCard.style.visibility = "hidden";

        const newPage = document.querySelector(".new-page");
        newPage.style.visibility = "visible";
         
        const con0 = document.querySelector(".con0");
        con0.style.visibility = "visible";


        let div = document.createElement("div");
        div.className = "new";
        newPage.appendChild(div);

        let div1 = document.createElement("div");
        div1.className = "btn-text";
        div.appendChild(div1);

        let leftArrow = document.createElement("i")
        leftArrow.className = "fa-solid fa-circle-arrow-left";
        div1.appendChild(leftArrow);


        let back = document.createElement("span");
        back.className = "back";
        back.innerText = "Back";
        div1.appendChild(back);

        let h1 = document.createElement("h1");
        h1.innerText = cardInput.value;
        h1.className = "h1";
        h1.style.color = "white";
        div.appendChild(h1);
        // h1.appendChild(listName);

        // const addOne = document.createElement("i");
        // addOne.className = "fa-solid fa-circle-plus";
        // div.appendChild(addOne);

        let div2 = document.createElement("div");
        div2.className = "new-card";
        div2.appendChild(card1);
        newPage.appendChild(div2);

        ////////////back button--------------

        leftArrow.addEventListener("click", () => {
          div2.removeChild(card1);
          newPage.removeChild(div);
          container2.appendChild(card1);
          document.querySelector(".main").style.visibility = "visible";
          document.querySelector(".new-page").style.visibility = "hidden";
        })
        ////---------------------------
        del.addEventListener("click", () => {
          document.querySelector(".main").style.visibility = "visible";
          document.querySelector(".new-page").style.visibility = "hidden";
          document.querySelector(".new-page").removeChild(div);
          div2.removeChild(card1);
        })
       
      })

    }
  })




})
