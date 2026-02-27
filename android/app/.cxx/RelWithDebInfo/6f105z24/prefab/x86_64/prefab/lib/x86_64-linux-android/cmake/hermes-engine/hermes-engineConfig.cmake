if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/shai/.gradle/caches/8.10.2/transforms/e131e9fb4adbb09beecb3a622d083f3e/transformed/hermes-android-0.76.7-release/prefab/modules/libhermes/libs/android.x86_64/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/shai/.gradle/caches/8.10.2/transforms/e131e9fb4adbb09beecb3a622d083f3e/transformed/hermes-android-0.76.7-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

