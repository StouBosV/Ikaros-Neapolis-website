<template>
    <div class="shadow p-3 mb-5 bg-white rounded">
      <h1>Ρόστερ Ομάδας</h1>
        <table class="table table-borderless">
            <thead>
                <tr>
                <th scope="col">Θέση</th>
                <th scope="col">Επίθετο</th>
                <th scope="col">Όνομα</th>
                </tr>
            </thead>
            <tbody>
                <app-roster
                    v-for="athlete in rosters"
                    :key="athlete"
                    :pos="athlete.position"
                    :first="athlete.first"
                    :last="athlete.last"
                ></app-roster>
            </tbody>
        </table>
    </div>
</template>

<script>
import Roster from '../../components/Roster'

export default {
    inject: ['tmimata'],
    props:['tmima'],
    components:{
        appRoster: Roster
    },
    data(){
        return {
            currentTmima:this.tmima,
            roster: []
        }
    },
    computed: {
            rosters(){
                return this.$store.getters.roster;
            }
        },
    
    created() {
    if (this.tmima === 'andriko'){
        this.$store.dispatch('initAndriko');
    } else {
        this.$store.dispatch('initPaidiko');
    }
    console.log(this.currentTmima)
    console.log(this.$store.getters.roster)
    },
    watch: {
        tmima(newRoster) {
        this.loadRoster(newRoster);
        },
    },    
}
</script>