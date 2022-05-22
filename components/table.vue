<template>
    <div class="table">
        <template v-for="tableColl, i of tableData">
            <div class="table__coll" :key="i">
                <div class="table__row" v-for="tableRow, i of tableColl" :key="i">
                    <input type="text" class="table__input" :value="tableRow">
                </div>
            </div>
        </template>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            row: 7,
            coll: 6
        }
    },
    props: [
        'tableData'
    ]
}
</script>

<style lang="scss">
.table {
    width: 100%;
    display: flex;
    &__input {
        width: 225px;
        height: 100px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 37px;
        text-align: center;
        color: #434242;
        background: transparent;
        border: 2px solid rgba(83, 67, 64, 0.3);
    }
    &__row {
        &:last-child {
            .table__input {
                border-bottom: none;
            }
        }
    }
    &__coll {
        .table__input {
            border-top: none;
            border-left: none;
        }
        &:last-child {
            .table__input {
                border-right: none;
            }
        }
    }
}
</style>