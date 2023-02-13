let obj = [{
                    id: "5",
                    name: "gulabjamun",
                    type: "sweet",
                    description: "very famous sweet in the india the queen of sweet"
}];

console.log(obj);
function add(id, name, type, description) {
                    const all = { id: id, name: name, type: type, description: description }
                    all.id = prompt("enter a recepie id :");
                    all.name = prompt("enter a recepie  name:");
                    all.type = prompt("enter a recepie type:");
                    all.description = prompt("enter a  recepie descrption:");
                    console.log(obj);
                    obj.push(all);
                    console.table(all);

                    // let table = document.getElementById('list').getElementsByTagName('tbody')[0];
                    let table = document.getElementById('list');
                    let row = table.insertRow(table.length);
                    col1 = row.insertCell(0);
                    col1.innerHTML = all.id;
                    col2 = row.insertCell(1);
                    col2.innerHTML = all.name;
                    col3 = row.insertCell(2);
                    col3.innerHTML = all.type;
                    col4 = row.insertCell(3);
                    col4.innerHTML = all.description;
                    // console.log(all);}

}
add();

function deletedata() {
                    const deleterecepie = prompt("enter id:");
                    for (i of obj) {
                                        if (i.id = deleterecepie) {
                                                            obj.splice(i, 1);
                                                            console.log(obj);
                                        }


                    }

}


deletedata();

function view() {
                    console.table(obj);
}
view();
function update() {
                    const updaterecepie = prompt("enter id");
                    for (i of obj) {
                                        if (i.id == updaterecepie) {
                                                            i.id = prompt("enter a  recepie   id:");
                                                            i.type = prompt("enter a receipe  type:");
                                                            i.name = prompt("enter a  recepie name:");
                                                            i.description = prompt("enter a  recepie description");
                                                            console.log("updated");
                                                            console.table(obj);

                                        }
                    }
                    // console.log(obj)
                    // console.table(obj);
}
update();
function exitdata() {
                    console.clear();
}
