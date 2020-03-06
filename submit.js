var submit = {
create: function(cols, vals, cb) {
    orm.create("flipcard", cols, vals, function(res) {
      cb(res);
    });
  }
}