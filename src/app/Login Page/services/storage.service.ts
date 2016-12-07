import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

 set( key, value )
    {
        if( typeof( Storage ) !== "undefined" )
        {
            // Code for localStorage/sessionStorage.
            localStorage.setItem( key, JSON.stringify( value ) );
        }
        else
        {
            // Sorry! No Web Storage support..
            console.log('Sorry! No Web Storage support..');
        }
    }

    /**
     *
     * @param key
     * @returns {*}
     */
   get( key )
    {
        let result = localStorage.getItem( key );

        if ( typeof result !== 'undefined' && result && result.length > 0 )
        {
            return result;
        }

        return "";
    }


  remove( key )
    {
        if( typeof(Storage) !== "undefined" )
        {
            localStorage.removeItem(key);
        }
        else
        {
            console.log('Sorry! No Web Storage support..');
        }
    }


    size()
    {
        if( typeof( Storage ) !== "undefined" )
        {
            // Get localStorage size
            let storageSize = Math.round(JSON.stringify(localStorage).length);
            return storageSize;
        }
        else
        {
            // Sorry! No Web Storage support..
            console.log('Sorry! No Web Storage support..');
            return null;
        }
    }


   allKeys() {
        if( typeof( Storage ) !== "undefined" )
        {
            let values  = [];
            let keys    = Object.keys(localStorage);
            let kLength = keys.length;

            for ( let i = 0 ; i < kLength ; i ++ )
            {
                values.push( keys[i] );
            }

            return values;
        }
        else
        {
            // Sorry! No Web Storage support..
            console.log('Sorry! No Web Storage support..');
            return null;
        }
    }


    allKeysContainValue(value) {
        if( typeof( Storage ) !== "undefined" )
        {
            let values  = [];
            let keys    = Object.keys(localStorage);
            let kLength = keys.length;

            for ( let i = 0 ; i < kLength ; i ++ )
            {
                if ( keys[i].indexOf(value) > -1 )
                {
                    values.push( keys[i] );
                }
            }

            return values;
        }
        else
        {
            // Sorry! No Web Storage support..
            console.log('Sorry! No Web Storage support..');
            return [];
        }
    }

    storageLimit(key, limitNumber) {
        let limit = 5;
        if ( !isNaN( limitNumber ) )
        {
            limit = Number( limitNumber );
        }
       /*this.reduceStorageItem( key, limit );*/
    }


    /* reduceStorageItem( key, limitNumber )
    {
        let allKeys = this.allKeysContainValue( key );
        if ( allKeys.length > limitNumber )
        {
            let listItem = [];
            _.each(allKeys, function ( itemKey )
            {
                let itemJson = get( itemKey );
                if ( __isStringHasValue( itemJson ) )
                {
                    let itemObject = JSON.parse( itemJson );
                    itemObject.itemKey = itemKey;
                    listItem.push( itemObject );
                }
            });

            listItem = listItem.sort(function ( a, b )
            {
                return a.save_time - b.save_time;
            });
            let removeKeyList = [];
            for ( let i = 0; i < (listItem.length - limitNumber); i++){
                removeKeyList.push(listItem[i].itemKey);
            }
            _.each(removeKeyList, function (itemKey) {
                this.remove(itemKey);
            });
        }
    }*/



}
