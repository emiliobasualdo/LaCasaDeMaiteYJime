api.model = api.model || {};

api.model.routine = class {
  constructor(id, name, actions, meta) {
    if (id) {
      this.id = id;
    } else {
      delete(this.id);
    }
    this.name = name;
    this.actions = actions;
    this.meta = meta;
  }
}