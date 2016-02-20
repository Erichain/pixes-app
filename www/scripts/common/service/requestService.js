/**
 * @description Request Service
 * @module Pixes.common
 * @author Erichain
 * @date 2015-11-14
 */
(function ( Common ) {

    Common.service('RequestService', RequestService);
    RequestService.$inject = ['$http', '$q', 'config'];

    function RequestService( $http, $q, config ) {
        var service =  {
            ajax: ajax,
            get: get,
            post: post
        };

        return service;

        /**
         * Ajax method
         *
         * @function ajax
         * @param {object} options
         * @returns {*}
         */
        function ajax( options ) {
            var default_options = {
                    method: 'POST',
                    url: '',
                    data: {},
                    headers: {
                        'Content-Type': 'Application/json'
                    }
                },
                defered = $q.defer();

            options = angular.merge( {}, default_options, options );
            //options.headers['X-SERVICE'] = options.url;

            //if it's mock mode
            options.url = config.API_ROOT_URL + options.url;
            //console.log(options.url);

            $http(options)
                .then(function ( data ) {
                    defered.resolve(data.data);
                }, function ( reason ) {
                    defered.reject(reason);
                });

            return defered.promise;
        }

        /**
         * base function of get and post
         *
         * @function _request
         * @param method
         * @param url
         * @param data
         * @param config
         * @returns {*}
         * @private
         */
        function _request( method, url, data, config ) {
            var options = angular.merge( {}, config || {} );
            options.method = method;
            options.url = url;
            options.data = data || {};

            return service.ajax(options);
        }

        /**
         * @function get
         * @param url
         * @param data
         * @param config
         * @returns {*}
         */
        function get( url, data, config ) {
            return _request('GET', url, data, config)
        }

        /**
         * @function post
         * @param url
         * @param data
         * @param config
         * @returns {*}
         */
        function post( url, data, config ) {
            return _request('POST', url, data, config);
        }
    }

})( angular.module('Pixes.common') );