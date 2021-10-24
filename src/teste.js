function techList(entry, name) {
    let output = [];
    for (let i of entry) {
      let obj = {
        tech: i,
        name: name
      };
      output.push(obj);
    }
    console.log(output);
  } techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");