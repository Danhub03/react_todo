// Övning 1
// Transformera alla namnen till versaler.

var names = [
    "Andrew",
    "Peter",
    "Eliza",
    "Kirsten",
    "Jeanette"
];

var uppercase = names.map(function(names) {
    return names.toUpperCase();
});

console.log(uppercase);

// Övning 2
// Transformera arrayen och lägg till attributet area (innehållande den 
// korrekta arean baserat på attributen height och width) på alla element.

var triangles = [
    { width: 12, height: 22 },
    { width: 21, height: 12 },
    { width: 35, height: 49 },
    { width: 12, height: 50 },
    { width: 20, height: 35 }
];

var calculate = triangles.map(function(triangles) {
    return  triangles.area = triangles.width * triangles.height /2;
});

console.log(calculate);

// Övning 3
// Filtrera ut alla filmer som släpptes inom perioden 1990 - 2000.

var movies = [
    { title: "Batman Begins", year: 2005 },
    { title: "Batman", year: 1989 },
    { title: "Batman Returns", year: 1992 },
    { title: "Batman Forever", year: 1995 },
    { title: "Batman & Robin", year: 1997 },
    { title: "Batman: Under the Red Hood", year: 2010 },
    { title: "Batman: The Dark Knight Returns, Part 1", year: 2012 },
    { title: "Batman: Mask of the Phantasm", year: 1993 },
    { title: "Batman: The Movie", year: 1966 },
    { title: "Batman: The Dark Knight Returns, Part 2", year: 2013 }
];

var movienames = movies
    .filter(function(movie) {
        return movie.year > 1990 && movie.year < 2000;
    })
    .map(function(movie) {
        return movie.title;
    });

console.log(movienames);

// Övning 4
// Filtrera ut alla filmer som släpptes på 2000-talet och transformera resultatet till en array endast 
// innhållande alla titlar. Det vill säga ["Batman Begins", "Batman: Under the Red Hood", ...].

var movies = [
    { title: "Batman Begins", year: 2005 },
    { title: "Batman", year: 1989 },
    { title: "Batman Returns", year: 1992 },
    { title: "Batman Forever", year: 1995 },
    { title: "Batman & Robin", year: 1997 },
    { title: "Batman: Under the Red Hood", year: 2010 },
    { title: "Batman: The Dark Knight Returns, Part 1", year: 2012 },
    { title: "Batman: Mask of the Phantasm", year: 1993 },
    { title: "Batman: The Movie", year: 1966 },
    { title: "Batman: The Dark Knight Returns, Part 2", year: 2013 }
];

var movienames = movies
    .filter(function(movie) {
        return movie.year > 2000;
    })
    .map(function(movie) {
        return movie.title;
    });

console.log(movienames);

// Övning 5
// Filtrera och transformera resultatet till en array innehållande endast alla id på de tasks som är 
// avklarade och hade hög prioritet.

var datas = {
    title: "ToDo List",
    tasks: [
        { id: 101, complete: false, priority: "High", title: "Do something" },
        { id: 102, complete: false, priority: "Medium", title: "Do something else" },
        { id: 103, complete: true, priority: "Low", title: "Fix the foo" },
        { id: 104, complete: false, priority: "High", title: "Adjust the bar" },
        { id: 105, complete: true, priority: "High", title: "Fetch the baz" },
        { id: 106, complete: false, priority: "Medium", title: "Clean the apartment" },
        { id: 107, complete: false, priority: "Low", title: "Refactor my code" },
        { id: 108, complete: true, priority: "High", title: "Finish the second assignment" }
    ]
};

var approvedIds = datas.tasks
  .filter(task => task.complete == true && task.priority === "High")
  .map(task => task.id);

console.log(approvedIds);

// Övning 6
// Filtrera och transformera resultatet till en array innehållande objekt med attributet name vars 
// innehåll är title + id (t.ex “Do something (101)”) - där ni endast tar de tasks som inte är avklarade 
// och inte har låg prioritet. Det vill säga [{ name: "Do something (101)" }, ...].

var data = {
    title: "ToDo List",
    tasks: [
        { id: 101, complete: false, priority: "High", title: "Do something" },
        { id: 102, complete: false, priority: "Medium", title: "Do something else" },
        { id: 103, complete: true, priority: "Low", title: "Fix the foo" },
        { id: 104, complete: false, priority: "High", title: "Adjust the bar" },
        { id: 105, complete: true, priority: "High", title: "Fetch the baz" },
        { id: 106, complete: false, priority: "Medium", title: "Clean the apartment" },
        { id: 107, complete: false, priority: "Low", title: "Refactor my code" },
        { id: 108, complete: true, priority: "High", title: "Finish the second assignment" }
    ]
};

var approvedIds = datas.tasks
  .filter(task => task.complete == false && task.priority === "Medium" || task.complete == false && task.priority === "High")
  .map(task => "name: " + task.title + " (" + task.id  + ")" );

console.log(approvedIds);


