<template>
    <tr class="table">
        <td scope="row">{{ pos }}</td>
        <td>{{ team }}</td>
        <td>{{ wins }}</td>
        <td>{{ losses }}</td>
        <td>{{ points }}</td>
        <td>
            <a href="#editTeamModal" class="edit" data-toggle="modal"><i class="fas fa-pen" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="#deleteTeamModal" class="delete" data-toggle="modal"><i class="fas fa-trash-alt" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    </tr>
</template>

<script>

export default {
    props:['pos', 'team', 'wins', 'losses', 'points']
}
</script>