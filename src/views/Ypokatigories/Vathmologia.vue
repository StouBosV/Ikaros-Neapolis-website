<template>
  <div>
      <div class="container mt-2 mb-2">
        <div class="table-wrapper shadow p-3 mb-5 bg-white rounded">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-9">
                      <h1>Βαθμολογία Πρωταθλήματος</h1>
                    </div>
                    <div class="col-sm-3">
                      <a href="#addTeamModal" class="btn more" data-toggle="modal"><i class="fas fa-plus" style="color:white">&#xE147;</i> <span>Προσθήκη Ομάδας</span></a>
                    </div>
                </div>
            </div>
        <table class="table table-borderless mt-3" id="table">
          <thead>
            <tr>
              <th>Θέση</th>
              <th>Ομάδα</th>
              <th>Νίκες</th>
              <th>Ήττες</th>
              <th>Βαθμοί</th>
            </tr>
          </thead>
          <tbody>
            <app-points v-for="omada in omades"
                  :key="omada.position"
                  :pos="omada.position"
                  :team="omada.team"
                  :wins="omada.wins"
                  :losses="omada.losses"
                  :points="omada.points"
            ></app-points>
          </tbody>
        </table>
        <!-- Add Modal HTML -->
        <div id="addTeamModal" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <form>
                  <div class="modal-header">      
                    <h4 class="modal-title">Προσθήκη Ομάδας</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div class="modal-body">     
                    <div class="form-group">
                      <label>Θέση</label>
                      <input type="text" class="form-control" required>
                    </div>
                    <div class="form-group">
                    <label>Ομάδα</label>
                    <input type="text" class="form-control" required>
                    </div>
                    <div class="form-group">
                      <label>Αριθμός Νίκών</label>
                      <input type="number" class="form-control" required>
                    </div>
                    <div class="form-group">
                      <label>Αριθμός Ηττών</label>
                      <input type="number" class="form-control" required>
                    </div> 
                    <div class="form-group">
                      <label>Σύνολο Βαθμών</label>
                      <input type="number" class="form-control" required>
                    </div>     
                  </div>
                  <div class="modal-footer">
                    <input type="button" class="btn btn-default" data-dismiss="modal" value="Ακύρωση">
                    <input type="submit" class="btn btn-success" value="Προσθήκη">
                  </div>
              </form>
            </div>
          </div>
        </div>
        <!-- Edit Modal HTML -->
        <div id="editTeamModal" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <form>
              <div class="modal-header">      
                <h4 class="modal-title">Επεξεργασία Ομάδας</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>
              <div class="modal-body">     
                <div class="form-group">
                      <label>Θέση</label>
                      <input type="text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Ομάδα</label>
                    <input type="text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Αριθμός Νίκών</label>
                    <input type="number" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Αριθμός Ηττών</label>
                    <input type="number" class="form-control" required>
                </div> 
                <div class="form-group">
                    <label>Σύνολο Βαθμών</label>
                    <input type="number" class="form-control" required>
                </div>     
              </div>
              <div class="modal-footer">
                <input type="button" class="btn btn-default" data-dismiss="modal" value="Ακύρωση">
                <input type="submit" class="btn btn-info" value="Αποθήκευση">
              </div>
              </form>
            </div>
          </div>
        </div>
        <!-- Delete Modal HTML -->
        <div id="deleteTeamModal" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <form>
                <div class="modal-header">      
                  <h4 class="modal-title">Διαγραφή Ομάδας</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">     
                  <p>Είστε σίγουρος πως θέλετε να διαγράψετε αυτήν την Ομάδα?</p>
                  <p class="text-danger"><small>Αυτή η ενέργεια δεν μπορεί να αναιρεθεί!</small></p>
                </div>
                <div class="modal-footer">
                  <input type="button" class="btn btn-default" data-dismiss="modal" value="Ακύρωση">
                  <input type="submit" class="btn btn-danger" value="Διαγραφή">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import Points from '../../components/Points'
  export default {
    components:{
        appPoints: Points
    },
    data: () => ({
      dialog: false,
      dialogDelete: false,
      omades: [],
      editedIndex: -1,
      editedItem: {
        position: 0,
        team: '',
        wins: 0,
        losses: 0,
        points: 0,
      },
      defaultItem: {
        position: 0,
        team: '',
        wins: 0,
        losses: 0,
        points: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
      console.log(this.omades)
    },

    methods: {
      initialize () {
        this.omades = [
          {
            position: 1,
            team: 'Ικαρος Νεαπολης',
            wins: 5,
            losses: 0,
            points: 10,
          },
          {
            position: 2,
            team: 'Κεραυνός',
            wins: 3,
            losses: 2,
            points: 8,
          },
          {
            position: 3,
            team: 'Αστέρας',
            wins: 1,
            losses: 4,
            points: 6,
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.omades.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.omades.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.omades.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.omades[this.editedIndex], this.editedItem)
        } else {
          this.omades.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>
    
    
</style>