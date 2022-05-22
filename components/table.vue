<template>
    <div class="table">
        <div class="table__coll" :key="i" v-for="tableColl, i of coll">
            <template v-if="tableData[tableColl - 1]">
                <div class="table__row" v-for="cell, j of tableData[tableColl - 1]" :key="j">
                    <input 
                        v-if="j === 0"
                        type="text" 
                        class="table__input" 
                        :value="cell" 
                        disabled
                        v-mask="'##.##.####'" />
                    <input 
                        v-else
                        type="text" 
                        class="table__input" 
                        :value="cell" 
                        disabled
                        v-mask="['#см', '##см', '###см']" />
                </div>
            </template>
            <template v-else>
                <template v-if="tableData.length === i">
                    <div class="table__row" v-for="cell, j of row" :key="j">
                        <input 
                            v-if="j === 0"
                            type="text" 
                            class="table__input" 
                            :value="''" 
                            v-mask="'##.##.####'" />
                        <input 
                            v-else
                            type="text" 
                            class="table__input" 
                            :value="''" 
                            v-mask="['#см', '##см', '###см']" />
                    </div>
                </template>
                <template v-else>
                    <div class="table__row" v-for="cell, j of row" :key="j">
                        <input 
                            v-if="j === 0"
                            type="text" 
                            class="table__input" 
                            :value="''" 
                            disabled
                            v-mask="'##.##.####'" />
                        <input 
                            v-else
                            type="text" 
                            class="table__input" 
                            :value="''" 
                            disabled
                            v-mask="['#см', '##см', '###см']" />
                    </div>
                </template>
            </template>
        </div>
    </div>    
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
    data() {
        return {
            row: 7,
            coll: 6
        }
    },
    props: [
        'tableData'
    ],
    directives: {mask},
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
        &:disabled {
            background: #fff8ed;
        }
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