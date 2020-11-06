<template>
    <tr class="table">
        <th scope="row">{{ pos }}</th>
        <td>{{ last }}</td>
        <td>{{ first }}</td>
    </tr>
</template>

<script>

export default {
    props:['pos', 'first', 'last']
}
</script>
